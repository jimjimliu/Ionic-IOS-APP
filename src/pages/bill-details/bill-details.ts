import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController,AlertController, ModalController,
  ToastController, Events } from 'ionic-angular';
import axios from 'axios';
import { DatePickerPage } from '../date-picker/date-picker';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-bill-details',
  templateUrl: 'bill-details.html',
})
export class BillDetailsPage {

  billDetail_list;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, 
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public modalCtrl: ModalController,
    public storage: Storage, public toastCtrl: ToastController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillDetailsPage');
  }

  /*
  It’s fired when entering a page, before it becomes the active one; 
  */
  ionViewWillEnter(){
    this.fetchInformation();
  }

  /*
  从后端提取账单信息，存储到数组中；
  由程序进入页面时自动触发；
  */
  fetchInformation(){
    const data = this.get_post_data();
    const post_data = data;

    // 弹出式加载信息框；
    const loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<div class="loader loader--snake"></div>',
      cssClass: 'loader'
    });
    loader.present();

    /* 请求数据 */
    axios.post('/statistics/bill_details.php', { data: post_data })
      .then((res) => { 
        loader.dismiss(); // 数据成功传回后，取消加载框；
        if(res.data.message){
          /* 如果返回的message不为空，说明后端返回的数据出错了，没有获取到账单信息。
          处理异常, 弹出信息提示框； */
          this.alertCtrl.create({
            title: 'Bill retrieve failed.',
            subTitle: res.data.message,
            buttons: ['ok']
          }).present()
          return
        }
        // 绑定后端传回的数据到变量上;
        this.billDetail_list = res.data['data'];
        /* 处理请求异常 */
      }).catch(Error=>{
        /* 在app.module.ts 中有拦截器处理异常。 */
        console.log(Error);
        loader.dismiss();
      });
  }

  /*
  return: Associative Array: {is_day_selected, from_date, to_date, ...}
  Return an array containing data to be posted to api;
  */
  private get_post_data(){
    const email = localStorage.getItem('email');
    const is_day_selected = localStorage.getItem('is_day_selected');
    if(is_day_selected){
      const post_data = {
        is_day_selected: true,
        from_date: localStorage.getItem('date_from'),
        to_date: localStorage.getItem('date_to'),
        email: email
      };

      /* clear storage */
      localStorage.removeItem('date_from');
      localStorage.removeItem('date_to');
      localStorage.removeItem('is_day_selected');
      return post_data;
    }
    else{
      var returnLast30;
      const month = this.getMonthPicked();
      if(month == '-1'){
        returnLast30 = true;
      }else{ returnLast30 = false; }

      const post_data = {
        is_day_selected: false,
        returnLatest30: returnLast30,
        month: month,
        year: this.getYearPicked(),
        email: email
      };
      return post_data;
    }
  }

  /*
  点击关闭按键，退出账单明细页面； 
  */
  closeBillDetails(){
    // 清空localstorage中相对应的value，以便每一次进入页面时都显示当先月份的账单列表；
    localStorage.removeItem('datePicked');
    this.view.dismiss();
  }

  /*
  @param: list: [{name, amount, date, bill_id},{...}], 通过 fetchInformation() 绑定到html的array，再通过前端发送回来；
          index: （Integer)
  由页面中的列表滑动手势触发；
  删除界面中的选项，并且在数据库中执行删除操作；
  */
  deleteItem(list, index) {
    console.log(list[index].name, list[index].amount, list[index].bill_id);
    const email = localStorage.getItem('email');
    /* 定义一个toast */
    const toast = this.toastCtrl.create({message: 'Deleting...', position:'bottom', cssClass:'toast-container'});
    const ID = list[index].bill_id;
    list.splice(index,1); //删除界面中的选项
    toast.present(); // 显示toast

    axios.post('/deleteBill.php', {billID: ID, email:email}) //在数据库中删除；
      .then((res) => {
        toast.dismiss();  // 关闭toast
        console.log(res.data.data);
        /* 如果返回的是data message，说明后端报错了。处理异常 */
        if(res.data.message){
          this.alertCtrl.create({
            title: 'Deletion Failes.',
            subTitle: res.data.message,
            buttons: ['OK']
          }).present();
        }
      }).catch(error => {
        /* 在app.module.ts 中有拦截器处理异常。 */
        console.log("bill-details Page, deletion error");
        console.log(error);
        toast.dismiss();
      })
  }

  /*
  由页面中的日历图标触发，生成一个用来选择日期的页面；
  */
  pickDate(){
    let page = this.modalCtrl.create(DatePickerPage);
    page.present();
  }

  /*
  void；
  每次用户第一次进入页面时，返回 -1，用来表示用户仍未选择自定义月份；
  如果用户进行了选择日期的操作，则返回相应的用户所选择的月份；
  return: (String), integer in String format;
  */
  private getMonthPicked(){
    var month = localStorage.getItem('monthPicked');
    // 如果起始的localstorage 中get到值，使用此值；
    if(month){
      /* 
      清空storage中与key相对应的value. 因为如果不清空，localstorage中仍会储存上一次选择日期时所设置的value值, 
      下一次开启页面时会显示上一次选择的日期的账单。
      但理想的效果是每一次开启页面，都显示近期30天内的账单。其他月份列表需要用户自行选择。
      清空操作也可以在离开页面，也就是 closeBillDetails() 函数中操作；
      */
      localStorage.removeItem('monthPicked');
      return month;
    }
    // 如果没有get到值，说明是第一次进入页面，并且没有执行过选择日期的操作，那么返回-1。在后端处理的时候如果是-1，代表返回最近30天的记录；
    return '-1';
  }

  /*
  void;
  return: (string);
  返回在datePickerPage 用户所选择的year；
  */
  private getYearPicked(){
    var year = localStorage.getItem('yearPicked');
    localStorage.removeItem('yearPicked');
    return year;
  }

}

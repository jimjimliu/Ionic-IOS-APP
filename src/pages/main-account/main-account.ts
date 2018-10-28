import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,ModalController, Events} from 'ionic-angular';
import axios from 'axios';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BillDetailsPage } from '../bill-details/bill-details';
import {StatisticsPage} from '../statistics/statistics';


@IonicPage()
@Component({
  selector: 'page-main-account',
  templateUrl: 'main-account.html',
})
export class MainAccountPage {

  display = false; //判定绿色菜单页面的显示；

  /* 前端绑定数据声明 */
  monthly_total = '';
  monthly_left =  '';
  total = '';
  number_of_expense = '';
  current_date;

  public data_list: FormGroup; /* form 数据封装在data_list中 */

  /* 自定义picker */
  simpleColumns = [
    {
      name: 'col1',
      options: [
        {text: 'daily expense', value: 'daily_expense'},
        {text: 'fixed expense', value: 'fixed_expense'},
        {text: 'other', value: 'other_expense'}
      ]
    },
    {
      name: 'col2',
      options: [
        {text: 'super market', value: 'super_market', parentVal: 'daily_expense'},
        {text: 'commodity', value: 'commodity', parentVal: 'daily_expense'},
        {text: 'restaurant', value: 'restaurant', parentVal: 'daily_expense'},
        {text: 'take out', value: 'take_out', parentVal: 'daily_expense'},
        {text: 'cigarette', value: 'cigarette', parentVal: 'daily_expense'},
        {text: 'clothes', value: 'clothes', parentVal: 'daily_expense'},
        {text: 'transportation', value: 'transportation', parentVal: 'daily_expense'},
        {text: 'other', value: 'other', parentVal: 'daily_expense'},
        {text: 'rent', value: 'rent', parentVal: 'fixed_expense'},
        {text: 'fees', value: 'fees', parentVal: 'fixed_expense'},
        {text: 'insurance', value: 'insurance', parentVal: 'fixed_expense'},
        {text: 'gas', value: 'gas', parentVal: 'fixed_expense'},
        {text: 'other', value: 'other', parentVal: 'fixed_expense'},
        {text: 'medical', value: 'medical', parentVal: 'other_expense'}
      ]
    }
  ];


  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private modalCtrl: ModalController, public events: Events) { 

    /* 使用Events中的subscribe，使其他page 可以调用本class中的 extractMonth() 函数； */
    events.subscribe("getMonth", (tmp)=>{
      return this.extractMonth(tmp);
    });
    events.subscribe("getYear", (tmp) => {
      return this.extractYear(tmp);
    })

    /* data_list 为html中的form封装之后的object, 作为所有form input 的容器 */
    this.data_list = this.formBuilder.group({
      //用regular expression来监听金额输入是否有效；包含[0-9]的任意数字，{1，}从一位开始的任意长度；
      val: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,}[.]{0,1}[0-9]{0,}')])],
      date: ['', Validators.required],
      name: ['', ],
      type: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('main-account page');
  }

  /* ===========================================================================
  It’s fired when entering a page, before it becomes the active one; 
  =========================================================================== */
  ionViewWillEnter(){
    /* 加载页面时，设置当前日期，绑定到前端 ticket 图标中； */
    this.current_date = (new Date()).getDate();
    this.fetchInformation();
  }

  /* ===========================================================================
  主页下拉刷新操作；
  由 ion-refresher 触发； 
  =========================================================================== */
  doRefresh(event){

    /* customized loader style; scss located in app.scss; */
    const loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<div class="loader loader--snake"></div>',
      cssClass: 'loader'
    });
    loader.present()
    this.fetchInformation();
    event.complete(); //关闭下拉刷新；
    loader.dismiss(); // 关闭loader；
  }

  /* ===========================================================================
  Fetch data from database;
  =========================================================================== */
  fetchInformation(){
    const email = localStorage.getItem('email');
    var month = (new Date()).getMonth()+1;
    axios.post('/statistics/bill_summary.php', { email:email, selected_month:month })
      .then((res)=>{
        this.monthly_total = res.data['data']['monthly_total'];
        this.monthly_left = res.data['data']['monthly_left'];
        this.total = res.data['data']['totalSum'];
        this.number_of_expense = res.data['data']['numberofExpense'];
      }).catch(Error =>{
        /* 另外，在app.module.ts 中有拦截器处理异常。 */
        console.log(Error);
      });
  }

  /* ===========================================================================
  清空除了日期之外的所有input field；
  当点击圆形按键时，更改display的boolean值，用来显示或者收起弹出界面；
  =========================================================================== */
  toggle() {
    /*
    由于触发的界面不是一个view，所以页面只在程序启动时初始化一次；
    所以为了能每次打开弹出页面时，日期都是及时更新的。每次打开时，都要重新设置最新的日期；
    */
    this.data_list['controls']['date'].setValue((new Date().toISOString())); 
    this.data_list['controls']['name'].reset();//退出界面之后清空必要的输入框；
    this.data_list['controls']['val'].reset();
    this.data_list['controls']['type'].reset();
    return this.display = !this.display;
  }

  /* ===========================================================================
  点击button之后的提交动作；
  post到后端，添加账单;
  =========================================================================== */
  addBill(){
    /* get expense array from input field */
    const expense_array = this.getPickerValue(this.data_list.value['type']);
    const email = localStorage.getItem('email');
    /* get type from the input field */
    var type = expense_array[0];
    var category = expense_array[1];
    var name = this.data_list.value['name'];
    var amount = this.data_list.value['val'];
    var month = this.extractMonth(this.data_list.value['date']);
    var year = (new Date()).getFullYear();
    var date = this.data_list.value['date'].toString().substring(0, 10);

    axios.post('/statistics/bill_new.php', {email:email,info_type:type,info_cat: category, info_name:name,info_amount:amount,info_month:month, info_year:year, 
      info_date:date})
      .then(res => {
        /* 返回数据异常，处理异常 */
        if (res.data.message) {
          this.alertCtrl.create({
            title: 'Information Update failed',
            subTitle: res.data.message,
            buttons: ['ok']
          }).present()
          return
        }

        this.alertCtrl.create({
          title: 'Bill Saved',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.toggle();//after info successfully upadted, close the meun;
              }
            }
          ]
        }).present()
      }).catch(error => {
        /* 另外，在app.module.ts 中有拦截器处理异常。 */
        console.log(error);
      })
  }

  /* ===========================================================================
  helper function to extract month from ionic datetime input field.
  Since type of data_list.value['date'] is String, we need to parse the string and get month within it;
  =========================================================================== */
  private extractMonth(date){
    var month = date.substring(5,7);
    if(month.substring(0,1)==='0') return month.substring(1,2);
    return month.substring(0,2);
  }

  /* ===========================================================================
  helpler function to extract year from the given input datetime string;
  @param: date: formate 2018-05-27T13:47
  return: (String)
  =========================================================================== */
  private extractYear(date){
    var year = date.substring(0,4);
    return year;
  }

  /* ===========================================================================
  @param: string(String)
  returns: the according title of the expense type name;
  i.e.: rent'id is 2, the title 'fixed_expense' should be returned;
  =========================================================================== */
  private getPickerValue(string){
    var array = string.split(', ');
    return array;
  }

  /* ===========================================================================
  进入BillDetails 页面；
  =========================================================================== */
  showBillDetails(){
    let page = this.modalCtrl.create(BillDetailsPage);
    page.present();
  }

  statistics_page(){
    this.navCtrl.push(StatisticsPage);
    console.log(this.navCtrl.getViews());
  }
}

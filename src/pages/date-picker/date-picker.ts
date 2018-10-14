import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html',
})
export class DatePickerPage {

  /* 声明form名称 */
  public date: FormGroup;
  public date_in_day: FormGroup;

  private time_measure = 'month';
  /* 用来控制选择具体日期的form的显示 */
  private hidden = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
          private storage: Storage, private formBuilder: FormBuilder, public events:Events) {

    /* 绑定form */
    this.date = this.formBuilder.group({
      // default date is chosen as the current month;
      datePick: [(new Date()).toISOString().substring(0,10), ],
      from: [(new Date()).toISOString().substring(0,10), ],
      to: [, ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePickerPage');
  }
  
  /*
  由页面上方关闭按键触发，销毁modal；
  */
  closePage(){
    this.viewCtrl.dismiss();
  }

  /*
  由页面上方完成键触发，保存日期数据到localstorage，供billDetails页面提取；
  */
  saveDate(){
    /* if time_measure = month, that means users are selecting to view bills in month */
    if(this.time_measure == 'month'){
      /* get date value from form */
      var tmp = this.date.value['datePick'];
      // 调用 MainAccountPage 中的 extractMonth(date) function; 使用Events自带的publish 和 subscribe;
      var month = this.events.publish("getMonth", tmp);
      console.log(month);
      var year = this.events.publish("getYear", tmp);
      // 将所选择的月份储存在storage中；
      localStorage.setItem('monthPicked', month[0]);
      localStorage.setItem("yearPicked", year[0]);
    }
    /* if time_measure = day, users wants to view details between two dates */
    else{
      /* get from and to date value from form */
      var date_from_selected = this.date.value['from'];
      var date_to_selected = this.date.value['to'];
      console.log(date_from_selected, date_to_selected);

      /* save the two values in localstorage for billDetails page to fetch */
      localStorage.setItem('date_from', date_from_selected);
      localStorage.setItem('date_to', date_to_selected);
      localStorage.setItem('is_day_selected', 'true');
    }
    this.viewCtrl.dismiss();
  }

  /*
  */
  private change_time_measure(){
    if(this.time_measure === 'month'){
      this.time_measure = 'day';
    }
    else{
      this.time_measure = 'month';
    }
    /* 显示或者隐藏form */
    this.hidden = !this.hidden;
  }

}

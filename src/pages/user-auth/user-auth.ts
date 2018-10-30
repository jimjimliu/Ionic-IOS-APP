import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,ModalController, ViewController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import axios from 'axios';
import { AuthCodePage } from '../auth-code/auth-code';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-user-auth',
  templateUrl: 'user-auth.html',
})
export class UserAuthPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    private menuCtrl: MenuController, public modalCtrl: ModalController, private view: ViewController, private params: NavParams) {
      this.toLogin = this.params.get('toLogin');
      this.email = this.params.get('email');
      this.password = this.params.get('password');
    }

  phone_number: string = '';
  toLogin: string = '';
  email: string = '';
  password: string = '';

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAuthPage');
  }

  //disable swipe gesture in the page;
  ionViewDidEnter(){
    this.menuCtrl.swipeEnable(false);
  }
  /* 
  enable swipe gesture when leave this page;
  otherwise, other pages' swipe gesture will be disable too;
  */
  ionViewWillLeave(){
    this.menuCtrl.swipeEnable(true);
  }

  /* ==============================================================
  用户输入用户名之后post到后端API处理，并且发送验证码到用户手机；
  发送成功后返回验证码；
  跳转到输入验证码页面；
  ============================================================== */
  async send_auth_code(){
    /* 监控 input field */
    if (this.phone_number === '') {
      this.alertCtrl.create({
        buttons: ['ok'],
        title: 'Please enter your phone number'
      }).present();
      return
    }

    /* 定义加载框 */
    const loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<div class="loader loader--snake"></div>',
      cssClass: 'loader'
    });
    loader.present();

    /* post到后端API，发送验证码到用户手机，并且返回验证码，储存到本地 */
    axios.post('/2FA/sms_code.php', {phone_number: this.phone_number, country_code:'+1', user_email:this.email})
      .then((res) => {
        loader.dismiss();
        /* 如果message为空，说明验证码发送成功 */
        if( !res.data.message ){
          /* 将验证码储存到local数据库 */
          localStorage.setItem('auth_code', res.data.data);
          /* 跳转页面 */
          let page = this.modalCtrl.create(AuthCodePage, {toLogin: this.toLogin, email:this.email, password:this.password});
          page.present();
        }
        /* 验证码发送失败 */
        else{
          this.alertCtrl.create({
            title: 'FAIL',
            subTitle: res.data.message,
            buttons: ['CLOSE']
          }).present()
        }
      }).catch(error =>{
        /* 另外，在app.module.ts 中有拦截器处理异常。 */
        console.log(error);
        loader.dismiss();
      });
  }

  /**==============================================================
   * 
   * @param phone_number: (String) 用户手机号
   * @return: 添加国家区号
   * 给用户手机号添加区号，暂时这样写。之后在前端让用户选择国家区号；
  ============================================================== */
  private append_country_code(phone_number){
    return "+1"+phone_number;
  }

}

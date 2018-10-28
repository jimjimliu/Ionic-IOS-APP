import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import { LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SettingPage } from '../setting/setting';
import { UserAuthPage } from '../user-auth/user-auth';
import axios from 'axios';
import HMAC from 'crypto-js/hmac-sha256';
import HEX from 'crypto-js/enc-hex';
import { AuthCodePage } from '../auth-code/auth-code';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor (public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    private menuCtrl: MenuController, private params: NavParams) { 
      if(this.params.get('email') && this.params.get('password') ){
        this.email = this.params.get('email');
        this.password = this.params.get('password');
        this.login();
      }else{
        this.email = '';
        this.password = '';
      }
    }

  email: string = ''
  password: string = ''

  //disable swipe gesture in the page;
  ionViewDidEnter(){
    this.menuCtrl.swipeEnable(false);
  }
  //enable swipe gesture when leave this page;
  //otherwise, other pages' swipe gesture will be disable too;
  ionViewWillLeave(){
    this.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad LoginPage');
  }

  /* 由前端界面按键触发，跳转到注册页面 */
  toSignIn () {
    this.navCtrl.push(RegisterPage)
  }

  /*******************************************************
   * 用户登录
   *******************************************************/
  async login () {

    if (this.email === '' || this.password === '') {
      this.alertCtrl.create({
        buttons: ['ok'],
        title: 'Please fill all fieds'
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
    
    const salt = localStorage.getItem(this.email);
    console.log('salt:'+salt);
    /* 有salt */
    if( salt ){
      /* hmac加密 */
      const hmac_psw = HMAC(this.password, salt).toString(HEX);
      /* 请求 */
      axios.post('/users/login.php', {email: this.email, hmac_psw: hmac_psw})
        .then((res) => {
          /* 登录成功 */
          if( res.data['data'] == 'True' ){
            loader.dismiss();
            this.navCtrl.setRoot(SettingPage);
            //设置登录状态
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('email', this.email);
          }
          /* 添加手机号 */
          else if( res.data['data'] == 'False' ){
            loader.dismiss();
            this.navCtrl.push(UserAuthPage);
          }else{ /* 验证失败 */
            loader.dismiss();
            //如果有遗留salt，移除
            if(localStorage.getItem('salt')){
              localStorage.removeItem('salt');
            }
            const message = res.data.message;
            this.alertCtrl.create({
              buttons: ['ok'],
              title: message
            }).present();
            return
          }
        });
    }
    /* 没有salt */
    else{
      axios.post('/users/user_auth.php', {email: this.email})
        .then((res) => {
          /* 用户不存在 */
          if(res.data['message']){
            loader.dismiss();
            const message = res.data.message;
            this.alertCtrl.create({
              buttons: ['ok'],
              title: message
            }).present();
            return
          }
          /* 无手机号，引导验证 */
          else if(! res.data['data']['auth']){
            loader.dismiss();
            this.navCtrl.push(UserAuthPage, {toLogin: true, email:this.email, password:this.password});
          }
          /* 有手机号 */
          else{
            loader.dismiss();
            this.navCtrl.push(AuthCodePage, {toLogin: true,email:this.email, password:this.password});
          }
        });
    }
  }

}

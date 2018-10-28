import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ModalController,App, 
  LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import axios from 'axios';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-auth-code',
  templateUrl: 'auth-code.html',
})
export class AuthCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
    public alertCtrl: AlertController, public modalCtrl:ModalController, public app: App, private loadingCtrl: LoadingController) {
      this.toLogin = this.navParams.get('toLogin');
      this.email = this.navParams.get('email');
      this.password = this.navParams.get('password');
    }
  
  toLogin: boolean;
  auth_code: string='';
  email: string = '';
  password: string ='';

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthCodePage');
  }

  /* 关闭页面 */
  close(){
    this.view.dismiss();
  }

  /* ========================================================================
   * 用户提交验证码， 发送到后端API验证；
   * 验证成功，跳转页面。验证失败，返回。
  ======================================================================== */
  verify_code(){
    // 弹出式加载信息框；
    const loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<div class="loader loader--snake"></div>',
      cssClass: 'loader'
    });
    loader.present();

    //请求salt
    axios.post("/users/salt.php", {auth_code: this.auth_code, user_email: this.email})
      .then((res) => {
        /* 验证成功 */
        if( res.data['data']['salt'] ){
          loader.dismiss();
          this.view.dismiss();
          //储存salt
          localStorage.setItem(this.email, res.data['data']['salt']);
          if(this.toLogin){this.app.getRootNav().setRoot(LoginPage, {email:this.email, password:this.password});}
   
        }else{
          loader.dismiss();
          this.alertCtrl.create({
            title: 'FAIL',
            subTitle: res.data.message,
            buttons: [{
              text: "CLOSE",
            }]
          }).present()
        }
      }).catch (error => {
        loader.dismiss();
      })
  }


}

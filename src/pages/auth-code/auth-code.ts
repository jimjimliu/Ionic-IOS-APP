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
    }
  
  toLogin: boolean;
  auth_code: String='';

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

    /* 后端验证 */
    const email = localStorage.getItem("user_email");
    console.log(email);
    axios.post("/auth_sms_code.php", {auth_code: this.auth_code, user_email: email})
      .then((res) => {
        /* 验证成功 */
        if( !res.data.message ){
          loader.dismiss();
          this.view.dismiss();
          // this.app.getRootNav().setRoot(LoginPage, {email: this.email, password: this.password});
          if(this.toLogin){this.app.getRootNav().setRoot(LoginPage);}
          else{
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('email', email)
            this.app.getRootNav().setRoot(SettingPage);
          }
        }
        /* 验证失败 */
        else{
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

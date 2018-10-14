import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import { LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SettingPage } from '../setting/setting';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor (public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    private menuCtrl: MenuController) { }

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

  /* 由前端按键触发，执行登陆验证； */
  async login () {
    // localStorage.setItem('isLogin', 'true');
    //     localStorage.setItem('email', 'jliu187@uottawa.ca');
    //     this.navCtrl.setRoot(SettingPage);
    /* 监控 input field */
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

    /* post到后端API，进行登录操作。登录成功后跳转到主界面。 */
    axios.post('/login.php', {email: this.email, password: this.password})
      .then((res) => {
        loader.dismiss(); 
        /* 如果返回的数据错误，弹出警示窗口，处理异常 */
        if (!res.data.current_user) {
          const message = res.data.message
          this.alertCtrl.create({
            buttons: ['ok'],
            title: message
          }).present();
          return
        }
        //direct to Setting Page(main page) after login;
        this.navCtrl.setRoot(SettingPage);
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('email', this.email);
      }).catch(error =>{
        loader.dismiss();
        /* 另外，在app.module.ts 中有拦截器处理异常。 */
        console.log(error);
      });
  }

}

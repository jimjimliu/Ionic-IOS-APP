import { Component } from '@angular/core'
import axios from 'axios'
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular'
import {App} from 'ionic-angular'
import { UserAuthPage } from '../user-auth/user-auth';
import { AuthCodePage } from '../auth-code/auth-code';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor (public navCtrl: NavController, public alertCtrl: AlertController, private app: App) {
    //this.fetchInfomation()
  }

  id = '';
  email = '';

  ionViewWillEnter(){
    this.fetchInfomation();
  }

  /*
  从数据库中提取数据; 将数据绑定到前端界面；
  */
  fetchInfomation () {
    const email = localStorage.getItem('email');
    axios.post('/info.php', { email })
      .then(res => {
        const {
          id,
          email,
        } = res.data.data;

        this.id = id;
        this.email = email;
      }).catch(error => {
        console.log(error);
      });
  }

  /* 由前端的 log out 按键触发； */
  logout () {
    let confirm = this.alertCtrl.create({
      title: 'Confirm logout?',
      message: 'You will exit and need login again?',
      buttons: [
        {
          text: 'Stay',
          handler: () => {
            console.log('Disagree clicked')
          }
        },
        {
          text: 'Agree',
          handler: () => {
            localStorage.removeItem('isLogin');
            localStorage.removeItem('email');
            //this.navCtrl.setRoot(LoginPage)
            /*
            this.app.getRootNav().push(), will hide tabs in child component
            xxx.setRoot(), will hide tabs and set root page from top level;
            */
           this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

}

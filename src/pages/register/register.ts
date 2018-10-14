import { Component } from '@angular/core'
import axios from 'axios'
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor (public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  email: string = ''
  password: string = ''
  rePassword: string = ''

  ionViewDidLoad () {
    console.log('ionViewDidLoad RegisterPage');
  }

  signUp () {
    this.validate(() => {
      axios.post('/register.php', {
        email: this.email,
        password: this.password
      })
        .then(res => {
          if (res.data.message) {
            this.alertCtrl.create({
              title: 'Reigster failed',
              subTitle: res.data.message,
              buttons: ['ok']
            }).present()
            return
          }

          this.alertCtrl.create({
            title: 'Success',
            message: 'Press ok and login',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.setRoot(LoginPage);
                }
              }
            ]
          }).present()
        }).catch(error => {
          /* 另外，在app.module.ts 中有拦截器处理异常。 */
          console.log(error);
        })
    })
  }

  validate (cb: any) {
    if (isEmpty(this.password) || isEmpty(this.email) || isEmpty(this.rePassword)) {
      const alert = this.alertCtrl.create({
        title: 'Validate failed',
        subTitle: 'All fields are required',
        buttons: ['ok']
      })
      alert.present()
      return
    }

    if (this.password !== this.rePassword) {
      const alert = this.alertCtrl.create({
        title: 'Validate failed',
        subTitle: 'password must be same',
        buttons: ['ok']
      })
      alert.present()
      return
    }

    if (!this.email.includes('@')) {
      const alert = this.alertCtrl.create({
        title: 'Validate failed',
        subTitle: 'Email is not correct',
        buttons: ['ok']
      })
      alert.present()
      return
    }

    cb && cb()
  }

}

function isEmpty (val: string) {
  return val.trim() === ''
}

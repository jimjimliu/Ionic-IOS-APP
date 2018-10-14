import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';
import {Chart1Page} from '../chart1/chart1'

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App, 
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  //direct to page, meanwhile we want to hide tabs
  goToChart1(){
    /*
    direct to a new page, or using navCtrl.push();
    but in Android, users may use return key build on the phone to go back;
    */
    //this.app.getRootNav().push(Chart1Page);

    /*
    Useing modalController to create a current page. Since modal is not reusable,
    when a modal is dismissed it is destroyed. Use ViewController to dismiss any modal;
    */
    let SecondPage = this.modalCtrl.create(Chart1Page);
    SecondPage.present();
  }

}

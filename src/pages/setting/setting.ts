import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationPage } from '../information/information';
import { ListPage } from '../list/list';
import { NavigationPage } from '../navigation/navigation';
import { MainAccountPage } from '../main-account/main-account';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  tab1root:any= MainAccountPage;
  tab2root:any= ListPage;
  tab3root:any= NavigationPage;
  tab4root:any= InformationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenu = false; //判定绿色菜单页面的显示；

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToAccount() {
    alert('Account clicked.');
    this.togglePopupMenu();
  }

  goToHome() {
    alert('Home clicked.');
    this.togglePopupMenu();
  }

  goToCups() {
    alert('Cups clicked.');
    this.togglePopupMenu();
  }

  goToLeaderboard() {
    alert('Leaderboard clicked.');
    this.togglePopupMenu();
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToShop() {
    alert('Shop clicked.');
    this.togglePopupMenu();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}

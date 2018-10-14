import { Component, ViewChild } from '@angular/core'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { Nav, Platform } from 'ionic-angular'
import { LoginPage } from '../pages/login/login'
import { SettingPage } from '../pages/setting/setting';
import { UserAuthPage } from '../pages/user-auth/user-auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = localStorage.getItem('isLogin') ? SettingPage : LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor (public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    //this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'Todo List', component: ListPage },
    //   { title: 'Gallery', component: GalleryPage },
    //   { title: 'Information', component: InformationPage },
    //   { title: 'Setting' , component: SettingPage}
    // ];

  }

  // async initializeApp () {
  //   await this.platform.ready()
  //   this.statusBar.styleDefault();
  //   this.splashScreen.hide();
  // }

  // openPage (page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
}

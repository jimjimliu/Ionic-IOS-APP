import { ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import axios from 'axios'
import { IonicApp, IonicErrorHandler, IonicModule, Events, AlertController } from 'ionic-angular'
import { MyApp } from './app.component'
import { InformationPage } from '../pages/information/information'
import { ListPage } from '../pages/list/list'
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'
import { SettingPage } from '../pages/setting/setting'
import { NavigationPage } from '../pages/navigation/navigation'
import { Chart1Page } from '../pages/chart1/chart1'
import { MainAccountPage } from '../pages/main-account/main-account'
import { BillDetailsPage } from '../pages/bill-details/bill-details'
import {DatePickerPage } from '../pages/date-picker/date-picker'
import {StatisticsPage} from '../pages/statistics/statistics'
import { UserAuthPage } from '../pages/user-auth/user-auth'
import { AuthCodePage } from '../pages/auth-code/auth-code'
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { SMS } from '@ionic-native/sms';
/* =================================================================================================
            plugin: <ion-multi-picker> 
            NPM: npm install ion-multi-picker --save
            source: https://github.com/raychenfj/ion-multi-picker
================================================================================================= */
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage,
    RegisterPage,
    InformationPage,
    SettingPage,
    NavigationPage,
    Chart1Page,
    LoginPage,
    MainAccountPage,
    BillDetailsPage,
    DatePickerPage,
    StatisticsPage,
    UserAuthPage,
    AuthCodePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: '返回'}),
    IonicStorageModule.forRoot(),
    MultiPickerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    RegisterPage,
    LoginPage,
    InformationPage,
    SettingPage,
    NavigationPage,
    Chart1Page,
    LoginPage,
    MainAccountPage,
    BillDetailsPage,
    DatePickerPage,
    StatisticsPage,
    UserAuthPage,
    AuthCodePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { 

  constructor(public events: Events, public alertCtrl: AlertController){

    /* =================================================================
    连接后端API
     ================================================================= */
    /* if running on localhost server, uncomment the following line */
    //axios.defaults.baseURL = 'http://localhost/api/api/';
    /* if running on server, uncomment the following line */
    axios.defaults.baseURL = 'http://jimsbill.ca/api/';
    axios.defaults.timeout =  15000; // 设置axios的最长默认请求时间，如果超出15秒，在页面中catch error，然后处理异常；

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log("before requesting", config);
      return config;
    }, (error) => {
      // 对请求错误做些什么
      console.log('error when requesting.');
      this.handle_request_error();
      return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      console.log('respond data',response);
      return response;
    }, (error) => {
      // 对响应错误做点什么
      console.log('error when responding');
      console.log(error);
      this.handle_respond_error();
      return Promise.reject(error);
    
    });
  }


  /*
  如果 axios 网络回应出现问题，则调用此函数；
  在 页面的 axios 请求中一定要 catch error，否则会引起程序崩溃；
  */
  handle_respond_error(){
    this.alertCtrl.create({
      title: 'Network/Data Respond Error',
      message: 'Lost of network connection OR error during data responding. Retry later.',
      buttons: [{
          text: 'OK',
          handler: () =>{}
        }]
    }).present();
  }

  /*
  如果 axios 网络请求出现问题，则调用此函数；
  */
  handle_request_error(){
    this.alertCtrl.create({
      title: 'Requesting Error',
      message: 'Data Requesting Error. Please retry later.',
      buttons: [{
          text: 'OK',
          handler: () =>{}
        }]
    }).present();
  }

}

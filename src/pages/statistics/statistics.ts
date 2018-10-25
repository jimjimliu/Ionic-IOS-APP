import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import Highcharts from 'highcharts';
import axios from 'axios';
import { MainAccountPage } from '../main-account/main-account';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  expense_year: number; /* data bound to html */
  year: number = 1300; /* ngModel */

  /* year range bound to ion-range */
  min_year: any;
  max_year: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    private alertCtrl: AlertController) {
    this.fetch_data();
  }

  /* ============================================================================
  triggered by ion-range using (ionChange);
  select year in the range, refresh the page to display statistics based on selected year;
  ============================================================================ */
  select_year(){
    console.log(this.year);
    const email = localStorage.getItem('email');
    /* bound to ngModel [year] */
    this.expense_year = this.year;
    var static_array;

    /* request api to process data */
    axios.post('/statistics.php', { email:email, selected_year:this.year })
      .then((res)=>{
        if( !res.data.message ){
          static_array = res.data['data'];
          /* remove the unwanted items in the array */
          delete static_array['min_year'];
          delete static_array['max_year'];
          /* transform integers to percentage in the array */
          const percentage_array = this.computePercentage(static_array);
          /* display chart */
          this.display_chart(percentage_array);
        }
        /* 如果当前年份没有数据返回，显示提示框 */
        else{
          this.alertCtrl.create({
            title: res.data.message,
            message: 'Press ok and dismiss',
            buttons: [
              {
                text: 'OK',
                // handler: () => {
                //   this.navCtrl.setRoot();
                // }
              }
            ]
          }).present()
        }
        
      }).catch(Error =>{
        /* 另外，在app.module.ts 中有拦截器处理异常。 */
        console.log(Error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }

  /* =======================================================================
  pop the current page in the stack;
  ======================================================================= */
  ionViewWillLeave(){
    console.log(this.navCtrl.getViews());
    this.navCtrl.setRoot(MainAccountPage);
  }

  /* ==============================================================================
  fetch data from database API;
  DATA format fetched is stored in static_array = {{super_market: "50.00", other: "992.40", …}};
  Finally calls function to display chart;
  ==============================================================================*/
  fetch_data(){
    const email = localStorage.getItem('email');
    /* use current year to first retrieve data */
    this.year = (new Date()).getFullYear();
    /* set html data [expense_year] */
    this.expense_year = this.year;
    var static_array;
    axios.post('/statistics.php', { email:email, selected_year:this.year })
      .then((res)=>{
        /* 如果当前年份有数据返回，显示图表 */
        if( ! res.data.message ){
          /* bind responed data to var */
          static_array = res.data['data'];
          /* set ion-range end points */
          this.min_year = static_array['min_year'];
          this.max_year = static_array['max_year'];
          /* remove the unwanted items in the array */
          delete static_array['min_year'];
          delete static_array['max_year'];
          /* transform the data format in the array to percentage */
          const percentage_array = this.computePercentage(static_array);
          /* call function to render the chart */
          this.display_chart(percentage_array);
        }
        /* 如果当前年份没有数据返回，显示提示框 */
        else{
          this.alertCtrl.create({
            title: res.data.message,
            message: 'Press ok and dismiss',
            buttons: [
              {
                text: 'OK',
                // handler: () => {
                //   this.navCtrl.setRoot();
                // }
              }
            ]
          }).present()
        }
        
      }).catch(Error =>{
        /* 另外，在app.module.ts 中有拦截器处理异常。 */
        console.log(Error);
      });
  }

  /* ==============================================================================
  @param: (Array): {rent: "7887.28", super_market: "50.00", take_out: "57.34", clothes: "0",....}
  return: array: {super_market: 2, take_out: 2, clothes: 0, transportation: 0, other: 43, …}
  ==============================================================================*/
  private computePercentage(array){
    var total = 0;
    var result_array = [];
    for(var key in array){
        total += Number(array[key]);
    }
    for(var index in array){
      if(array[index] !== '0'){
        result_array.push({name: index, y:Math.round(Number(array[index])/total*100)});
      }
    }
    return result_array;
  }

  /* ==============================================================================
  @param: (Array): {super_market: 2, take_out: 2, clothes: 0, transportation: 0, other: 43, …}

  utilizing Highchart.js to render the pie chart;
  ==============================================================================*/
  display_chart(array){
        Highcharts.chart('pie_chart', {
        chart: {
            plotBackgroundColor: '#eeecdf',
            plotBorderWidth: '100%',
            plotBorderColor: '#eeecdf',
            plotShadow: false,
            type: 'pie',
            background: '#eeecdf'
        },
        title: {
            text: null,
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    }
                }
            }
        },
        series: [{
            name: 'portion',
            colorByPoint: true,
            data: array
        }]
    });
  }
}

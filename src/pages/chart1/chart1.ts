import { Component } from '@angular/core';
import axios from 'axios';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import Highcharts from 'highcharts';
import {App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chart1',
  templateUrl: 'chart1.html',
})
export class Chart1Page {
   
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public view: ViewController) {
    this.fetchData();
  }
  
  country_data;

  fetchData(){
      const email = localStorage.getItem('email');
      axios.post('/countryInfo.php', {email})
        .then((res)=>{
            this.country_data = res.data['data'];
            this.computePercentage(this.country_data);
            console.log(this.country_data);
            this.display(this.country_data);
        }).catch(error => {
            console.log(error);
        });
  }

  computePercentage(data){
      var total = 0;
      for(var key in data){
          total += Number(data[key]);
      }
      for(var key in data){
          data[key] = Math.round(Number(data[key])/total*100);
      }
      return data;
  }

  goBack(){
      //dismiss the modal using ViewController;
      this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chart1Page');
  }

  display(country_data){
    Highcharts.chart('container',{
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2018 Country donation history'
        },
        tooltip: {
            headerFormat: '{series.name}:'
        ,
            pointFormat: '{point.name}: {point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.percentage:.1f} %',
                    
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'donation percentage',
            data: [
                ['Haiti',   country_data['Haiti']],
                
                {
                    name: 'South Sudan',
                    y: country_data['South Sudan'],
                    sliced: true,
                    selected: true
                },
                ['Niger',    country_data['Niger']],
                ['Ethiopia',     country_data['Ethiopia']],
                ['Tanzania',   country_data['Tanzania']]
            ]
        }]
    });
  }

}

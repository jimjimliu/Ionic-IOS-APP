import { Component } from '@angular/core'
import { AlertController, NavController, NavParams } from 'ionic-angular'
import { LoginPage } from '../login/login'
import {App} from 'ionic-angular'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor (public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, 
    private app: App) {
    
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [{
      title: 'Eat dinner',
      note: 'With Jane',
      icon: 'beer'
    }, {
      title: 'Play football',
      note: 'At 4 PM',
      icon: 'football'
    }, {
      title: 'Play basketball',
      note: 'In School',
      icon: 'basketball'
    }, {
      title: 'Travel',
      note: 'Next Sunday',
      icon: 'boat'
    }, {
      title: 'Write a letter',
      note: 'To pen pal',
      icon: 'paper-plane'
    }]
  }

  
}

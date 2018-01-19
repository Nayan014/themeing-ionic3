import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingsProvider } from './../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  selectedTheme: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private settings: SettingsProvider) {

      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ionViewDidLoad() {
    
  }

  navigateToPage(pageName: string){
    this.navCtrl.push(pageName);
  }
}

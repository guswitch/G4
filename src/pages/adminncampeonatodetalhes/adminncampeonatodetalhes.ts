import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimedetalhesPage } from '../timedetalhes/timedetalhes';
/**
 * Generated class for the AdminncampeonatodetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminncampeonatodetalhes',
  templateUrl: 'adminncampeonatodetalhes.html',
})
export class AdminncampeonatodetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminncampeonatodetalhesPage');
  }

    openPageTimedetalhes(){
    this.navCtrl.push(TimedetalhesPage);
    }
}

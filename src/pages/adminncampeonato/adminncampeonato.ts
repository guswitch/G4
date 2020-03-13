import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminncampeonatodetalhesPage } from '../adminncampeonatodetalhes/adminncampeonatodetalhes';
import { CriarcampeonatoPage } from '../criarcampeonato/criarcampeonato';

/**
 * Generated class for the AdminncampeonatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminncampeonato',
  templateUrl: 'adminncampeonato.html',
})
export class AdminncampeonatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminncampeonatoPage');
  }

  OpenCampeonatodetalhes(){
    this.navCtrl.push(AdminncampeonatodetalhesPage)
  }

    openCriarCampeonato(){
     this.navCtrl.push(CriarcampeonatoPage)
    }
}

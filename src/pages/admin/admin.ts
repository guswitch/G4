import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminncampeonatoPage } from '../adminncampeonato/adminncampeonato';
import { ListartimesPage } from '../listartimes/listartimes';
import { AdminnoticiasPage } from '../adminnoticias/adminnoticias';
import { AdminjogosPage } from '../adminjogos/adminjogos';
import { AdminestatisticasPage } from '../adminestatisticas/adminestatisticas';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  OpenListarJogos(){
    this.navCtrl.push(AdminjogosPage);
  }

  OpenCampeonatodetalhes(){
    this.navCtrl.push(AdminncampeonatoPage);
  }

  OpenListartimes(){
    this.navCtrl.push(ListartimesPage);
  }
  OpenListarNoticias(){
    this.navCtrl.push(AdminnoticiasPage);
  }

  OpenEstatisticas(){
    this.navCtrl.push(AdminestatisticasPage);
  }
}

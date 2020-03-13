import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JogoProvider } from '../../providers/jogo/jogo'
import { Observable } from 'rxjs';
import {AdminestatisticasdetalhesPage} from '../adminestatisticasdetalhes/adminestatisticasdetalhes';


/**
 * Generated class for the AdminestatisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminestatisticas',
  templateUrl: 'adminestatisticas.html',
})
export class AdminestatisticasPage {

  Jogos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: JogoProvider) {
      this.Jogos= this.provider.getAll();
  }

  goToadminestatisticadetalhes(key,time1,time2,data){
    this.navCtrl.push('AdminestatisticasdetalhesPage',{
      k: key,
      t1: time1,
      t2: time2,
      d: data
    })
  }


}

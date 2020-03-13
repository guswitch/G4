import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GerarconfrontosPage } from '../gerarconfrontos/gerarconfrontos';
import { TimeProvider } from '../../providers/time/time';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the CriarcampeonatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criarcampeonato',
  templateUrl: 'criarcampeonato.html',
})
export class CriarcampeonatoPage {

  Times: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TimeProvider) {
    this.Times = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarcampeonatoPage');
  }

  goToGerarconfrontos(nome){
    alert(nome);
    this.navCtrl.push('GerarconfrontosPage',{

    });
  }

}

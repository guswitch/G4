import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JogoProvider } from '../../providers/jogo/jogo';
import { JogodetalhesPageModule } from './jogodetalhes.module';
import { Observable } from 'rxjs';

/**
 * Generated class for the JogodetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogodetalhes',
  templateUrl: 'jogodetalhes.html',
})
export class JogodetalhesPage {

 // Jogos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: JogoProvider) {
 //   this.Jogos = this.provider.get('key');
  }
   
    key = this.navParams.get('k');
    time1 = this.navParams.get('t1');
    time2 = this.navParams.get('t2');
    gols1 = this.navParams.get('g1');
    gols2 = this.navParams.get('g2');
    data = this.navParams.get('d');

}

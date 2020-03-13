import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JogodetalhesPage } from '../jogodetalhes/jogodetalhes';
import { JogodetalhesPageModule } from '../jogodetalhes/jogodetalhes.module';
import { JogoProvider } from '../../providers/jogo/jogo';
import { Observable } from 'rxjs';


/**
 * Generated class for the JogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
})
export class JogosPage {

  Jogos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: JogoProvider) {
    this.Jogos = this.provider.getAll();
  }

  OpenJogoDetalhes(key,time1,time2,data,gols1,gols2){
    //alert(key + "\n" + time1 + "\n" +  time2  + "\n" + data);
    this.navCtrl.push('JogodetalhesPage',{
      k: key,
      t1: time1,
      t2: time2,
      d: data,
      g1: gols1,
      g2: gols2
    });
  }

}

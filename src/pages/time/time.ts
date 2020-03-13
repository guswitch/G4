import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimedetalhesPage } from '../timedetalhes/timedetalhes';
import { TimeProvider } from '../../providers/time/time';
import { Observable } from 'rxjs/Observable';
import { JogoProvider } from '../../providers/jogo/jogo';



/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})

export class TimePage {

  Times: Observable<any>;
  //Jogos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: TimeProvider, private provider2: JogoProvider) {
    this.Times = this.provider.getAll();
  //  this.Jogos = this.provider.getAll();
  }

  OpenTimedetalhes(key,nome,descricao,goltit,golres,fixotit,fixores,aladtit,aladres,alaetit,alaeres,pivotit,pivores/*,desempenho1*/){
   // alert(desempenho1);
   this.navCtrl.push('TimedetalhesPage', {
      k: key,
      n:nome,
      d: descricao,
      gt: goltit,
      gr: golres,
      ft: fixotit,
      fr: fixores,
      adt: aladtit,
      adr: aladres,
      aet: alaetit,
      aer: alaeres,
      pt: pivotit,
      pr: pivores,
  //    d1: desempenho1
    }); 
  }

}

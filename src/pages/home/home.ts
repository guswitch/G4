import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimedetalhesPage } from '../timedetalhes/timedetalhes';
import { BuscarPage } from '../buscar/buscar';
import { TimeProvider } from '../../providers/time/time';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Times: Observable<any>;

  constructor(public navCtrl: NavController, private provider: TimeProvider) {
    this.Times = this.provider.getAll();
  }
  
   // goToPageTime(){
   //  this.navCtrl.push(TimePage);
   // }

   OpenTimedetalhes(key,nome,descricao,goltit,golres,fixotit,fixores,aladtit,aladres,alaetit,alaeres,pivotit,pivores){
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
      pr: pivores
    });
  }

  gotoBuscar(){
    this.navCtrl.push(BuscarPage);
  }

}

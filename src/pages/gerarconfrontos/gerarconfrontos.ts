import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GerarconfrontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var disa=false;

@IonicPage()
@Component({
  selector: 'page-gerarconfrontos',
  templateUrl: 'gerarconfrontos.html',
})


export class GerarconfrontosPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GerarConfrontos(){
    disa = true;
  }

}

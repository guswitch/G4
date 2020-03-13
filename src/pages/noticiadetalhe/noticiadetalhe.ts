import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiadetalhePageModule } from './noticiadetalhe.module';

/**
 * Generated class for the NoticiadetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticiadetalhe',
  templateUrl: 'noticiadetalhe.html',
})
export class NoticiadetalhePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  key = this.navParams.get('k');
  titulo = this.navParams.get('t');
  descricao = this.navParams.get('d');
}

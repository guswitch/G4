import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { NoticiaProvider } from '../../providers/noticia/noticia';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  public obj_noticias = {
      titulo:"G4 é lançado!",
      desc:"O mais Novo app para os campeonatos esportivos na ETEC ABS",
      img:"../../assets/imgs/FourG.png",
      titulo1:"Interclasse começa!",
      desc1:"O campeonato mais desejado teve seu ínicio no dia 08/12...",
  }

  @ViewChild(Content) up: Content;

  Noticias: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: NoticiaProvider) {
    this.Noticias = this.provider.getAll();
  }
  

  scrollToTop() {
    this.up.scrollToTop();
  }

  OpenNoticiasdetalhes(key,titulo,descricao){
    //alert(key + "\n" + time1 + "\n" +  time2  + "\n" + data);
    this.navCtrl.push('NoticiadetalhePage',{
      k: key,
      t: titulo,
      d: descricao
    });
  }

}

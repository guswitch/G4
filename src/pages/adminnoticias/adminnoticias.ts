import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CriarnoticiaPage } from '../criarnoticia/criarnoticia';
import { NoticiaProvider } from '../../providers/noticia/noticia';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AdminnoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminnoticias',
  templateUrl: 'adminnoticias.html',
})
export class AdminnoticiasPage {
  Noticias: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private provider: NoticiaProvider, private toast: ToastController) {
    this.Noticias = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminnoticiasPage');
  }

     goToCriarnoticia(){
       this.navCtrl.push(CriarnoticiaPage)
     }


     removeNoticia(key: string) {
      if (key) {
        this.provider.remove(key)
          .then(() => {
            this.toast.create({ message: 'Noticia removida', duration: 3000 }).present();
          })
          .catch(() => {
            this.toast.create({ message: 'Erro!', duration: 3000 }).present();
          });
      }
    }

    editNoticia(noticia: any) {
      this.navCtrl.push('CriarnoticiaPage', { noticia: noticia });
    }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AdminmarcarjogoPage } from '../adminmarcarjogo/adminmarcarjogo';
import { JogoProvider } from '../../providers/jogo/jogo'
import { Observable } from 'rxjs';

/**
 * Generated class for the AdminjogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminjogos',
  templateUrl: 'adminjogos.html',
})
export class AdminjogosPage {

  Jogos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private provider: JogoProvider, private toast: ToastController) {
    this.Jogos = this.provider.getAll();
  }

  goToAdminmarcarjogo(){
    this.navCtrl.push(AdminmarcarjogoPage);
  }

  removeJogo(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Jogo removido', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro!', duration: 3000 }).present();
        });
    }
  }

  editJogo(jogo: any) {
    this.navCtrl.push('AdminmarcarjogoPage', { jogo: jogo });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CriartimePage } from '../criartime/criartime';
import { TimeProvider } from '../../providers/time/time';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListartimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listartimes',
  templateUrl: 'listartimes.html',
})
export class ListartimesPage {
  Times: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private provider: TimeProvider, private toast: ToastController) {
      this.Times = this.provider.getAll();
    }

  openCriartime(){
    this.navCtrl.push(CriartimePage);
  }

  removeTime(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Time removido', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro!', duration: 3000 }).present();
        });
    }
  }

  editTime(time: any) {
    this.navCtrl.push('CriartimePage', { time: time });
  }
}

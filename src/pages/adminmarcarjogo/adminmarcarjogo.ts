import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TimeProvider } from '../../providers/time/time';
import { JogoProvider } from '../../providers/jogo/jogo';
import {Observable} from 'rxjs'
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

/**
 * Generated class for the AdminmarcarjogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminmarcarjogo',
  templateUrl: 'adminmarcarjogo.html',
})
export class AdminmarcarjogoPage {
  
  myDate: String = new Date().toISOString();
 
  private form: FormGroup;
  Times1:Observable<any>;
  Times2:Observable<any>;
  DiasValidos: Observable<any>;
  jogo: any;
  datas: Array<string>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: JogoProvider,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private provideraux: TimeProvider) {
      //listar times
      this.Times1 = provideraux.getAll();
      this.Times2 = provideraux.getAll();
      // this.DiasValidos = provider.get('data');
     // this.datas = [
     //   '12'
     // ]
    this.jogo = this.navParams.data.jogo || { };
    this.createForm();
  }


  createForm() {
    this.form = this.formBuilder.group({
      key: [this.jogo.key],
      time1: [this.jogo.time1, Validators.required],
      time2: [this.jogo.time2, Validators.required],
      data: [this.jogo.data, Validators.required],
      gols1: [this.jogo.gols1],
      gols2: [this.jogo.gols2,]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Jogo salvo com sucesso!', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Jogo.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListartimesPage } from '../listartimes/listartimes';
import { TimeProvider } from '../../providers/time/time';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the CriartimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criartime',
  templateUrl: 'criartime.html',
})
export class CriartimePage {

  private form: FormGroup;
  time: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: TimeProvider,
    private toast: ToastController) {
      this.time = this.navParams.data.time || { };
     this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.time.key],
      nome: [this.time.nome, Validators.required],
      descricao: [this.time.descricao, Validators.required],
      goltit: [this.time.goltit, Validators.required],
      golres: [this.time.golres, Validators.required],
      fixotit: [this.time.fixotit, Validators.required],
      fixores: [this.time.fixores, Validators.required],
      alaetit: [this.time.alaetit, Validators.required],
      alaeres: [this.time.alaeres, Validators.required],
      aladtit: [this.time.aladtit, Validators.required],
      aladres: [this.time.aladres, Validators.required],
      pivotit: [this.time.pivotit, Validators.required],
      pivores: [this.time.pivores, Validators.required]
    });
  }

    goToListartimes(){
      this.navCtrl.pop();;
    }

    onSubmit() {
      if (this.form.valid) {
        this.provider.save(this.form.value)
          .then(() => {
            this.toast.create({ message: 'Time Cadastrado com sucesso!', duration: 3000 }).present();
            this.navCtrl.pop();
          })
          .catch((e) => {
            this.toast.create({ message: 'Erro ao cadastrar o Time.', duration: 3000 }).present();
            console.error(e);
          })
      }
    }
}

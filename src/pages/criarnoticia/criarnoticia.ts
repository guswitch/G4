import { Component } from '@angular/core';
import { NoticiaProvider } from '../../providers/noticia/noticia';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Criarnoticia } from '../../models/criarnoticia';


@IonicPage()
@Component({
  selector: 'page-criarnoticia',
  templateUrl: 'criarnoticia.html',
})
export class CriarnoticiaPage {

  private form: FormGroup;
  noticia: any;

  //criarnoticia: Criarnoticia;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private formBuilder: FormBuilder,
     private provider: NoticiaProvider,
     private toast: ToastController) {
   // this.criarnoticia = new Criarnoticia();
   this.noticia = this.navParams.data.noticia || { };
   this.createForm();
  }

 /*goToAdminnoticias(){
    console.log(this.criarnoticia);
    this.navCtrl.pop();
  }*/

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.noticia.key],
      titulo: [this.noticia.titulo, Validators.required],
      descricao: [this.noticia.descricao, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Noticia salva com sucesso!', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Noticia.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}

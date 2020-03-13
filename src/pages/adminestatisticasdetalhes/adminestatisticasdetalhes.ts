import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { JogoProvider } from '../../providers/jogo/jogo';
import { TimeProvider } from '../../providers/time/time';


/**
 * Generated class for the AdminestatisticasdetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminestatisticasdetalhes',
  templateUrl: 'adminestatisticasdetalhes.html',
})
export class AdminestatisticasdetalhesPage {

  jogo: any;
  private form: FormGroup;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private provider: JogoProvider,
    private provider2: TimeProvider,
    private alrtController: AlertController) {
    this.jogo = this.navParams.data.jogo || { };
    this.createForm();

  }
   
  key = this.navParams.get('k');
  time1 = this.navParams.get('t1');
  time2 = this.navParams.get('t2');
  data = this.navParams.get('d');

  goltit = this.navParams.get('gt');
  golres = this.navParams.get('gr');
  fixotit = this.navParams.get('ft');
  fixores = this.navParams.get('fr');
  aladtit = this.navParams.get('adt');
  aladres = this.navParams.get('adr');
  alaetit = this.navParams.get('aet');
  alaeres = this.navParams.get('aer');
  pivotit = this.navParams.get('pt');
  pivores = this.navParams.get('pr');

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.jogo.key],
      time1: [this.jogo.time1],
      time2: [this.jogo.time2],
      data: [this.jogo.data],
      gols1: [this.jogo.gols1, Validators.required],
      gols2: [this.jogo.gols2, Validators.required],
      desempenho1: [this.jogo.desempenho1, Validators.required],
      desempenho2: [this.jogo.desempenho2, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.saveestatistica(this.form.value, this.key)
        .then(() => {
          this.toast.create({ message: 'Estatistica salva com sucesso!', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Estatistica.', duration: 3000 }).present();
          console.error(e);
        })

        /*this.provider2.saveestatistica(this.form.value,this.time1,this.key)
        .then(() => {
         })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Estatistica.', duration: 3000 }).present();
          console.error(e);
        })*/
      }
  }

  Selecaogol1(){
    let selecionar = this.alrtController.create({
      title: 'Gols de ' + this.time1,
      subTitle: 'Selecione quem Marcou e Quantos'
    });
  //  i: Number;
   // p:Number;
  //  for(){
    selecionar.addInput({
      type: 'checkbox',
      label: 'OI',
      value: 'OI'
      });
 //      }
      selecionar.addButton({

      })
    selecionar.present();

  }

}

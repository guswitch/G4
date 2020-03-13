import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { SignupPage } from '../signup/signup';
import { NgForm } from '@angular/forms';
import { UsuarioPage } from '../usuario/usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private authservice: AuthService, 
    private toastCtrl: ToastController,
    private loadController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }
  signIn(){
    let loader = this.loadController.create({
      content: 'Aguarde',
      duration: 1000
    });
    loader.present(); 
    if(this.form.form.valid){
      this.authservice.signIn(this.user)
      .then(()=>{
        this.navCtrl.setRoot(HomePage);
      })
    .catch((error: any)=>{
        let toast = this.toastCtrl.create({duration:3000, position:'bottom'});
        if (error.code  == 'auth/invalid-email') {
          toast.setMessage('E-mail invalido');
        } else if (error.code  == 'auth/user-disabled') {
          toast.setMessage('Usuario Desativado');
        } else if (error.code  == 'auth/user-not-found') {
          toast.setMessage('Usuario não encontrado');
        } else if (error.code  == 'auth/wrong-password') {
          toast.setMessage('Senha invalida!');
        }
        toast.present();
    });
    }
  }

}

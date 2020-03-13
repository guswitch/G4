import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { Admin } from '../../providers/auth/user';


/**
 * Generated class for the LoginadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginadmin',
  templateUrl: 'loginadmin.html',
})
export class LoginadminPage {
admin: Admin = new Admin();
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginadminPage');
  }

  signIn(){
    /* if(this.form.form.valid){
      this.authservice.signIn(this.user)
      .then(()=>{
        this.navCtrl.setRoot(AdminPage);
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
    } */
    if(this.admin.id == "g4admin" && this.admin.senha == "aislindo"){
      this.navCtrl.setRoot(AdminPage)
    }
    else{
      let toast = this.toastCtrl.create({ message: "ERRO", duration:3000, position:'bottom'});

      toast.present();
    }
  }

}

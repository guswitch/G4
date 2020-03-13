import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth/auth-service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  signOut(){
      this.authService.signOut()
      .then(() => {
          this.navCtrl.setRoot(LoginPage);
      })
      .catch((error)=>{
        console.error(error);
      });

  }
}

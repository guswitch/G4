import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LottieAnimationViewModule } from 'ng-lottie';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  animaconfig: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    LottieAnimationViewModule.forRoot();

        this.animaconfig = {
          path: 'assets/animacoes/arrow_down.json',
          autoplay: true,
          loop: true

        }
  }

 gotoHome(){
   this.navCtrl.setRoot(HomePage);
 }

}

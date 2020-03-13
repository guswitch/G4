import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LogintimePage } from '../pages/logintime/logintime';
import { UsuarioPage } from '../pages/usuario/usuario';
import { NoticiasPage } from '../pages/noticias/noticias';
import { LoginadminPage } from '../pages/loginadmin/loginadmin';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { TimePage } from '../pages/time/time';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { JogosPage } from '../pages/jogos/jogos';
import { BuscarPage } from '../pages/buscar/buscar';
import { TutorialPage } from '../pages/tutorial/tutorial';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any, icon:string}>;


  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen, afAuth: AngularFireAuth ) {

    const authObserver = afAuth.authState.subscribe(user => {
      if(user){
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }
      else{
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    })

    // used for an example of ngFor and navigation

    this.pages = [
      { title: 'Home', component: HomePage , icon:"home"},
     // { title: 'List', component: ListPage }
     // { title: 'Login Time', component: LogintimePage, icon:"log-in"},
     //  { title: 'Buscar', component: BuscarPage, icon:"search"},
      { title: 'Times', component: TimePage, icon:"football"},
      { title: 'Usuario', component: UsuarioPage, icon:"person"},
      { title: 'Noticias', component:NoticiasPage, icon:"paper"},
      { title: 'Jogos', component:JogosPage, icon: 'calendar' },
      { title: 'Login Admin', component:LoginadminPage, icon:"ribbon"},
      { title: 'Sobre', component:AvaliacaoPage, icon:"information-circle" },
   //   { title: 'tutotial', component: TutorialPage, icon: ''}
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
   /* let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
     content: 'Carregando...',
      duration: 500
    });
  
   loading.present() */

    this.nav.setRoot(page.component);
  }
}

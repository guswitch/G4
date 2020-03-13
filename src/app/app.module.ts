import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Paginas e componentes

import { Ionrating } from '../components/ionrating/ionrating'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LogintimePage } from '../pages/logintime/logintime';
import { UsuarioPage } from '../pages/usuario/usuario';
import { NoticiasPage } from '../pages/noticias/noticias';
import { SignupPage } from '../pages/signup/signup';
import { LoginadminPage } from '../pages/loginadmin/loginadmin';
import { AdminPage } from '../pages/admin/admin';
import { LoginPage } from '../pages/login/login';
import { TimedetalhesPage } from '../pages/timedetalhes/timedetalhes';
import { JogadordetalhesPage } from '../pages/jogadordetalhes/jogadordetalhes';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { TimePage } from '../pages/time/time';
import { JogosPage } from '../pages/jogos/jogos';
import { AdminncampeonatoPage } from '../pages/adminncampeonato/adminncampeonato';
import { AdminncampeonatodetalhesPage } from '../pages/adminncampeonatodetalhes/adminncampeonatodetalhes';
import { JogodetalhesPage } from '../pages/jogodetalhes/jogodetalhes';
import { CriarcampeonatoPage } from '../pages/criarcampeonato/criarcampeonato';
import { GerarconfrontosPage } from '../pages/gerarconfrontos/gerarconfrontos';
import { GerarconfrontosPageModule } from '../pages/gerarconfrontos/gerarconfrontos.module';
import { ListartimesPage } from '../pages/listartimes/listartimes';
import { CriartimePage } from '../pages/criartime/criartime';
import { EditartimePage } from '../pages/editartime/editartime';
import { AdminnoticiasPage } from '../pages/adminnoticias/adminnoticias';
import { CriarnoticiaPage } from '../pages/criarnoticia/criarnoticia';
import { BuscarPage } from '../pages/buscar/buscar';
import * as Highcharts from 'highcharts';
import { AdminjogosPage } from '../pages/adminjogos/adminjogos';
import { AdminmarcarjogoPage } from '../pages/adminmarcarjogo/adminmarcarjogo';
import { CriarnoticiaPageModule } from '../pages/criarnoticia/criarnoticia.module';
import { CriartimePageModule } from '../pages/criartime/criartime.module';
import { AdminmarcarjogoPageModule } from '../pages/adminmarcarjogo/adminmarcarjogo.module';
import { JogodetalhesPageModule } from '../pages/jogodetalhes/jogodetalhes.module';
import { JogosPageModule } from '../pages/jogos/jogos.module';
import { TimePageModule } from '../pages/time/time.module';
import { TimedetalhesPageModule } from '../pages/timedetalhes/timedetalhes.module';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { NoticiadetalhePageModule } from '../pages/noticiadetalhe/noticiadetalhe.module';
import { NoticiadetalhePage } from '../pages/noticiadetalhe/noticiadetalhe';
import { AdminestatisticasPage } from '../pages/adminestatisticas/adminestatisticas';
import { AdminestatisticasdetalhesPage } from '../pages/adminestatisticasdetalhes/adminestatisticasdetalhes';
import { AdminestatisticasdetalhesPageModule } from '../pages/adminestatisticasdetalhes/adminestatisticasdetalhes.module';



import { FormsModule } from '@angular/forms';

//funçoes

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth/auth-service';
import { User } from '../providers/auth/user';
import { NoticiaProvider } from '../providers/noticia/noticia';
import { TimeProvider } from '../providers/time/time';
import { JogoProvider } from '../providers/jogo/jogo';


import { LottieAnimationViewModule } from 'ng-lottie';
import { JogadordetalhesPageModule } from '../pages/jogadordetalhes/jogadordetalhes.module';

//Graficos




const firebaseConfig = {
  apiKey: "AIzaSyAfJNnPMIpqRCSMukE6G6DiZOY9U4QNz3E",
  authDomain: "tccfourg.firebaseapp.com",
  databaseURL: "https://tccfourg.firebaseio.com",
  projectId: "tccfourg",
  storageBucket: "tccfourg.appspot.com",
  messagingSenderId: "515540468674"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  //  ListPage
    LogintimePage,
    UsuarioPage,
    NoticiasPage,
    SignupPage,
    //TimePage,
    LoginadminPage,
    AdminPage,
    LoginPage,
  //  TimedetalhesPage,
   // JogadordetalhesPage,
    AvaliacaoPage,
    AdminncampeonatoPage,
    AdminncampeonatodetalhesPage,
   // JogosPage,
    //JogodetalhesPage,
    CriarcampeonatoPage,
    //GerarconfrontosPage,
    ListartimesPage,
  //  CriartimePage,
    EditartimePage,
    AdminnoticiasPage,
   // CriarnoticiaPage,
    BuscarPage,
    Ionrating,
    AdminjogosPage,
   // AdminmarcarjogoPage
   TutorialPage,
   AdminestatisticasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CriarnoticiaPageModule,
    CriartimePageModule,
    AdminmarcarjogoPageModule,
    JogodetalhesPageModule,
    JogosPageModule,
    TimePageModule,
    TimedetalhesPageModule,
    NoticiadetalhePageModule,
    LottieAnimationViewModule,
    AdminestatisticasdetalhesPageModule,
    JogadordetalhesPageModule,
    GerarconfrontosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
 //   ListPage
    LogintimePage,
    UsuarioPage,
    NoticiasPage,
    SignupPage,
    TimePage,
    LoginadminPage,
    AdminPage,
    LoginPage,
    TimedetalhesPage,
    JogadordetalhesPage,
    AvaliacaoPage,
    AdminncampeonatoPage,
    AdminncampeonatodetalhesPage,
    JogosPage,
    JogodetalhesPage,
    CriarcampeonatoPage,
    GerarconfrontosPage,
    ListartimesPage,
    CriartimePage,
    AdminnoticiasPage,
    CriarnoticiaPage,
    EditartimePage,
    BuscarPage,
    AdminjogosPage,
    AdminmarcarjogoPage,
    TutorialPage,
    NoticiadetalhePage,
    AdminestatisticasPage,
    AdminestatisticasdetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    AuthService,
    User,
    NoticiaProvider,
    TimeProvider,
    JogoProvider
  ]
})

export class AppModule {
  
}

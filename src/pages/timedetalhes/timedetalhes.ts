import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';
import { JogadordetalhesPage } from '../jogadordetalhes/jogadordetalhes';
import { Observable } from 'rxjs';
import { JogoProvider } from '../../providers/jogo/jogo';
//import { JogoProvider } from '../../providers/jogo/jogo';


@IonicPage()
@Component({
  selector: 'page-timedetalhes',
  templateUrl: 'timedetalhes.html',
})
export class TimedetalhesPage {

  Jogos: Observable<any>; 
  primeirojogo: string;
  segundojogo: string;
  ultimojogo: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: JogoProvider) {
    this.Jogos = this.provider.getAll();
  }

  //key = this.navParams.get('k');

  //private PATH = 'jogo/' + this.key;

 // gols1 = this.
  nome = this.navParams.get('n');
  descricao = this.navParams.get('d');
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
  

  OpenGoleirodetalhes(nomeJ,posicao,nomeT){
    posicao="Goleiro";
    nomeJ = this.goltit;
    nomeT = this.nome;
   // alert(nomeJ + posicao);
    this.navCtrl.push('JogadordetalhesPage',{
      nt: nomeT,
      nJ: nomeJ,
      po: posicao
    });
  }

  OpenFixodetalhes(nomeJ,posicao, nomeT){
    posicao="Fixo";
    nomeJ = this.fixotit;
    nomeT = this.nome;
   // alert(nomeJ + posicao);
    this.navCtrl.push('JogadordetalhesPage',{
      nt: nomeT,
      nJ: nomeJ,
      po: posicao
    });
  }

  OpenAlaDdetalhes(nomeJ,posicao, nomeT){
    posicao="Ala Direita";
    nomeJ = this.aladtit;
    nomeT = this.nome;
    //alert(nomeJ + posicao);
    this.navCtrl.push('JogadordetalhesPage',{
      nt: nomeT,
      nJ: nomeJ,
      po: posicao
    });
  }

  OpenAlaEdetalhes(nomeJ,posicao, nomeT){
    posicao="Ala Esquerda";
    nomeJ = this.alaetit;
    nomeT = this.nome;
    //alert(nomeJ + posicao);
    this.navCtrl.push('JogadordetalhesPage',{
      nt: nomeT,
      nJ: nomeJ,
      po: posicao
    });
  }

  OpenPivodetalhes(nomeJ,posicao, nomeT){
    posicao="Pivo";
    nomeJ = this.pivotit;
    nomeT = this.nome;
    //alert(nomeJ + posicao);
    this.navCtrl.push('JogadordetalhesPage',{
      nt: nomeT,
      nJ: nomeJ,
      po: posicao
    });
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad TimedetalhesPage');
  /*  var myChart = HighCharts.chart('container', {

      colors: ['#0d922a', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', 
             '#FF9655', '#FFF263', '#6AF9C4'],

      chart: {
        backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
          ] 
      },
        type: 'bar'
      },
      title: {
        text: 'Desempenho'
      },
      xAxis: {
        categories: ['Jogo 1', 'Jogo 2', 'Jogo 3']
      },
      yAxis: {
        title: {
          text: 'Nota'
        }
      },
      series: [{
        name: this.nome,
        data: [8, 5, 8]
      }]
    }); */
  }

}

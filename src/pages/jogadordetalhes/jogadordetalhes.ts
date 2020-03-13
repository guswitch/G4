import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the JogadordetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogadordetalhes',
  templateUrl: 'jogadordetalhes.html',
})
export class JogadordetalhesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nomeJ = this.navParams.get('nJ');
  posicao = this.navParams.get('po');
  nomeT = this.navParams.get('nt')

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogadordetalhesPage');

   /* var myChart = HighCharts.chart('bloco', {

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
        name: this.nomeJ,
        data: [9, 2, 7]
      }]
    });*/

  }

}

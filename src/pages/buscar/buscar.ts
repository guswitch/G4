import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  initializeItems() {
    this.items = [
      'FourG',
      'Gustavo',
      'Aislan',
      'Gabriel'
    ];
  }

  getItems(ev: any) {

    this.initializeItems();

    const val = ev.target.value;


    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

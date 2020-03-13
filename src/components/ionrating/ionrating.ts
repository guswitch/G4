import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the IonratingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ionrating',
  templateUrl: 'ionrating.html'
})
export class Ionrating {

 
  @Input() numStars: number = 5;
  @Input() value: number = 2.5;

  @Output() ionclick: EventEmitter<number> = new EventEmitter<number>();

    stars: string[] =[];
    a: string;
    s: string;

  constructor(private altCtrl: AlertController) {}

  ngAfterViewInit(){
    this.calc();
  }

  calc(){
    this.stars = [];
    let tmp = this.value;
    for(let i=0; i < this.numStars; i++, tmp--){
        if(tmp>= 1){
          this.stars.push("star");
        }
        else if(tmp>0 && tmp <1){
          this.stars.push("star-half");
        }
        else{
          this.stars.push("star-outline");
        }
    }

  }

  starClicked(index){
    this.value = index + 1;
    this.ionclick.emit(this.value)
    this.calc();


    //s
    if(this.value == 1){
      this.s = "";   
    }
    else{
      this.s = "s";
    }



    //carinha
    if(this.value == 3){
      this.a = ':/';   
    }else if(this.value > 3){
      this.a = ':)';
    }
    else{
      this.a = ':(';
    }
    

    let enviar = this.altCtrl.create({
      title: ' Enviar ' + this.value + ' Estrela'+ this.s +' ? ' + this.a,
      subTitle: ' A sua avaliação vai para o nosso banco de dados, tentaremos sempre melhorar o app!',
      buttons:  [
        {
        text: "Sim",
        },

        {
          text: 'Não',
        }
    ] 
    }); 
    enviar.present();
  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerarconfrontosPage } from './gerarconfrontos';

@NgModule({
  declarations: [
    GerarconfrontosPage,
  ],
  imports: [
    IonicPageModule.forChild(GerarconfrontosPage),
  ],
  exports:[
    GerarconfrontosPage
  ]
})
export class GerarconfrontosPageModule {}

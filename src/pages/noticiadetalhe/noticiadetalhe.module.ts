import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiadetalhePage } from './noticiadetalhe';

@NgModule({
  declarations: [
    NoticiadetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiadetalhePage),
  ],
  exports:[
    NoticiadetalhePage
  ]
})
export class NoticiadetalhePageModule {}

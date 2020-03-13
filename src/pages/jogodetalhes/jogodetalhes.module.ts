import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogodetalhesPage } from './jogodetalhes';

@NgModule({
  declarations: [
    JogodetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(JogodetalhesPage),
  ],
  exports: [
    JogodetalhesPage,
  ]
})
export class JogodetalhesPageModule {}

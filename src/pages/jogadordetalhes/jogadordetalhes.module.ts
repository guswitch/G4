import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogadordetalhesPage } from './jogadordetalhes';

@NgModule({
  declarations: [
    JogadordetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(JogadordetalhesPage),
  ],
  exports: [
    JogadordetalhesPage
  ]
})
export class JogadordetalhesPageModule {}

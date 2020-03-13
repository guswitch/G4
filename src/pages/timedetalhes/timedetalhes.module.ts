import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimedetalhesPage } from './timedetalhes';

@NgModule({
  declarations: [
    TimedetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(TimedetalhesPage),
  ],
  exports: [
    TimedetalhesPage,
  ]
})
export class TimedetalhesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminestatisticasdetalhesPage } from './adminestatisticasdetalhes';

@NgModule({
  declarations: [
    AdminestatisticasdetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminestatisticasdetalhesPage),
  ],
  exports: [
    AdminestatisticasdetalhesPage
  ]
})
export class AdminestatisticasdetalhesPageModule {}

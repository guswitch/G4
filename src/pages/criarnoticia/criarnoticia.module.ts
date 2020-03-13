import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarnoticiaPage } from './criarnoticia';

@NgModule({
  declarations: [
    CriarnoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarnoticiaPage),
  ],
  exports: [
    CriarnoticiaPage
  ]
})
export class CriarnoticiaPageModule {}

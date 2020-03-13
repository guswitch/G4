import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriartimePage } from './criartime';

@NgModule({
  declarations: [
    CriartimePage,
  ],
  imports: [
    IonicPageModule.forChild(CriartimePage),
  ],
  exports: [
    CriartimePage
  ]
})
export class CriartimePageModule {}

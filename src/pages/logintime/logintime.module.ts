import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogintimePage } from './logintime';

@NgModule({
  declarations: [
    LogintimePage,
  ],
  imports: [
    IonicPageModule.forChild(LogintimePage),
  ],
})
export class LogintimePageModule {}

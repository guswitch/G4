import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminmarcarjogoPage } from './adminmarcarjogo';

@NgModule({
  declarations: [
    AdminmarcarjogoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminmarcarjogoPage),
  ],
  exports:[
    AdminmarcarjogoPage
  ]
})
export class AdminmarcarjogoPageModule {}

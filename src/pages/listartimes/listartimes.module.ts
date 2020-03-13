import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListartimesPage } from './listartimes';

@NgModule({
  declarations: [
    ListartimesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListartimesPage),
  ],
})
export class ListartimesPageModule {}

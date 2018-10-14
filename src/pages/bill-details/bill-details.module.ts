import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillDetailsPage } from './bill-details';

@NgModule({
  declarations: [
    //BillDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BillDetailsPage),
  ],
})
export class BillDetailsPageModule {}

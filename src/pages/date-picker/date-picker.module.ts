import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePickerPage } from './date-picker';

@NgModule({
  declarations: [
    //DatePickerPage,
  ],
  imports: [
    IonicPageModule.forChild(DatePickerPage),
  ],
})
export class DatePickerPageModule {}

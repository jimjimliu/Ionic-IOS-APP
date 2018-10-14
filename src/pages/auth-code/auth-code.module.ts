import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthCodePage } from './auth-code';

@NgModule({
  declarations: [
    //AuthCodePage,
  ],
  imports: [
    IonicPageModule.forChild(AuthCodePage),
  ],
})
export class AuthCodePageModule {}

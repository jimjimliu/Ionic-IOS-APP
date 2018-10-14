import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAuthPage } from './user-auth';

@NgModule({
  declarations: [
    //UserAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAuthPage),
  ],
})
export class UserAuthPageModule {}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

/*
  Generated class for the LogoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogoutProvider {

  constructor (public http: HttpClient) {
    console.log('Hello LogoutProvider Provider');
  }

  logout () {
    console.log(666)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';

@Injectable({
  providedIn: 'root'
})
export class PsyService {

  private isPsyLogged: any;
  constructor(private httpClient: HttpClient,private EncrDecr: EncrDecrService) {
    this.isPsyLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isPsyLogged = true;
   }
   register(psy: any) {
     console.log("In service")
     console.log(psy);
     var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', psy.psyPassword);
     console.log(encrypted)
     psy.psyPassword = encrypted.split('/').join('')
     console.log(psy);
     return this.httpClient.post('RestAPI/webapi/myresource/register1/',psy);
   }
   getPsychiatristByPsychiatristPass(loginId : any, password: any) : any{
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password);
    console.log(encrypted.split('/').join(''))
    console.log(encrypted)
    return this.httpClient.get('RestAPI/webapi/myresource/getPsychiatristByPsychiatristPass/'+loginId+'/'+encrypted.split('/').join(''));
  }
  getPsy() {
    console.log("IN getPsy")
    return this.httpClient.get('RestAPI/webapi/myresource/getPsy');
  }
  
  
}
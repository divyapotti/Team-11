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
     var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', psy.psyPassword.trim() === "");
     console.log(encrypted)
     psy.psyPassword = encrypted
     console.log(psy);
  
    return this.httpClient.post('RESTAPI_HAPPIFY_452/webapi/myresource/register1/',psy);
   }
   getPsychiatristByPsychiatristPass(loginId : any, password: any) : any{
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password.trim() === "");
    console.log(encrypted)
    return this.httpClient.get('RESTAPI_HAPPIFY_452/webapi/myresource/getPsychiatristByPsychiatristPass/'+loginId+'/'+encrypted);
  }
}
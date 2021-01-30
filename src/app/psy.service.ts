import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';

@Injectable({
  providedIn: 'root'
})
export class PsyService {

  public isPsyLogged: any;
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
  consultstatusyes(consult: any,psy:any) {
    console.log("in service yes");
    const conId = consult.consultationId
    const  psyId = psy.psyId
    var status = "Accepted"
    return this.httpClient.get('RestAPI/webapi/myresource/consultstatus/'+psyId+'/'+conId+'/'+status);
    

  }
  consultstatusNo(consult: any,psy:any) {
    console.log("in service no");
    const conId = consult.consultationId
    const  psyId = psy.psyId
    var status = "Declined"
    return this.httpClient.get('RestAPI/webapi/myresource/consultstatus/'+psyId+'/'+conId+'/'+status);
    
  }
  getconsult(psy:any) {
    console.log("In psy service")
    console.log(psy);
    const psyId=psy.psyId
    console.log(psy.psyId)
    return this.httpClient.get('RestAPI/webapi/myresource/consultlist/'+psyId);
    
  }
  setPsyLoggedIn(): void { // login success
    this.isPsyLogged = true;
   }
   onPsyLogout(event: Event) { 
    console.log("in onLogout")
    localStorage.removeItem('User');
    console.log("in onLogout")
    localStorage.clear();
    this.isPsyLogged=false;
  }
  
  
}
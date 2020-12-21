import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';
@Injectable({
  providedIn: 'root'
})
export class Userservice {
  private isUserLogged: any;
  constructor(private httpClient: HttpClient,private EncrDecr: EncrDecrService) {
    this.isUserLogged = false;
   }
   setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
   register(user: any) {
     console.log("In service")
     console.log(user);
     var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', user.password.trim() === "");
     console.log(encrypted)
     user.password = encrypted
     console.log(user);
    return this.httpClient.post('RESTAPI_HAPPIFY_452/webapi/myresource/register/',user);
   }
   getUserByUserPass(loginId : any, password: any) : any{
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password.trim() === "");
    console.log(encrypted)
    return this.httpClient.get('RESTAPI_HAPPIFY_452/webapi/myresource/getUserByUserPass/'+loginId+'/'+encrypted);
  }
  getUserByUserEmail(Email : any) : any{
    return this.httpClient.get('RESTAPI_HAPPIFY_452/webapi/myresource/getUserByEmail/'+Email);
  }

   

}
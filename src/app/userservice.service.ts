import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';
import {retry} from 'rxjs/operators';
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
     var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', user.password);
     console.log(encrypted)
     user.password = encrypted.split('/').join('')
     console.log(user);
    return this.httpClient.post('RestAPI/webapi/myresource/register/',user);
   }
   getUserByUserPass(loginId : any, password: any) : any{
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', password);
    console.log(encrypted)
    return this.httpClient.get('RestAPI/webapi/myresource/getUserByUserPass/'+loginId+'/'+encrypted.split('/').join(''));
  }
  getUserByUserEmail(Email : any) : any{
    return this.httpClient.get('RestAPI/webapi/myresource/getUserByEmail/'+Email);
  }

  getTasks() {
    console.log("IN Service")

    return this.httpClient.get('RestAPI/webapi/myresource/getTask');
  }
  
  /*postFile(ImageForm: any, fileToUpload: File) {
    // const endpoint='RESTAPI/webapi/myresource/';
    const formData: FormData = new FormData();
    formData.append('firstName', ImageForm.firstName);
    formData.append('lastName', ImageForm.lastName);
    formData.append('email', ImageForm.email);
    formData.append('mobileNumber', ImageForm.mobileNumber);
    formData.append('password', ImageForm.password);
    formData.append('conPassword', ImageForm.conPassword);
    formData.append('image', fileToUpload, fileToUpload.name);

    return this.httpClient.post('RestAPI/webapi/myresource/registerProduct/', formData);
  }
    */

}
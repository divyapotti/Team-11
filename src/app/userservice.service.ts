import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EncrDecrService} from './encr-decr.service';
import {retry} from 'rxjs/operators';
import { ConditionalExpr } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class Userservice {
  saveBlog(blog: any,user:any) {
    blog.user=user;
    console.log(blog);
    return this.httpClient.post('RestAPI/webapi/myresource/blogdata/',blog);
  }
 public isUserLogged:any;
private isPsy :any;
  consultation(consult: any,user:any ,psy:any) {
    console.log("In service consult")
     console.log(consult);
     console.log(user.userId)
     consult.user = user;
     consult.psychiatrist = psy;
     console.log(consult)
    return this.httpClient.post('RestAPI/webapi/myresource/consultform/',consult);
  }
  usermail(user:any) {
    console.log("called mail");
    console.log(user.email);
    return this.httpClient.get('RestAPI/webapi/myresource/usermail/'+user.email);
  }
  psymail(psy:any) {
    console.log("called mail");
    console.log(psy.psyEmail);
    return this.httpClient.get('RestAPI/webapi/myresource/psymail/'+psy.psyEmail);
  }
  count1(user: any) {
    console.log("count in service");
    const email=user.email;
    const count1=user.count1;
    console.log(email)
    console.log(count1);
    return this.httpClient.get('RestAPI/webapi/myresource/updateCount2/'+email+'/'+count1);
   }
 
  
  count2(user: any) {
    console.log("count in service");
    const email=user.email;
    const count2=user.count2;
    console.log(email)
    console.log(count2);
    return this.httpClient.get('RestAPI/webapi/myresource/updateCount2/'+email+'/'+count2);
   }
 
  constructor(private httpClient: HttpClient,private EncrDecr: EncrDecrService) {
    this.isUserLogged = false;
    this.isPsy = false;
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

  getTasks1() {
    console.log("IN Service task 1")
   
    return this.httpClient.get('RestAPI/webapi/myresource/getTaskById1/1');
  }
  getTasks2() {
    console.log("IN Service task 2")
   
    return this.httpClient.get('RestAPI/webapi/myresource/getTaskById2/2');
  }
  getTasks3() {
    console.log("IN Service task 2")
   
    return this.httpClient.get('RestAPI/webapi/myresource/getTaskById3/3');
  }
  getTasks4() {
    console.log("IN Service task 2")
   
    return this.httpClient.get('RestAPI/webapi/myresource/getTaskById4/4');
  }
  getTasks() {
    console.log("IN Service task ")
   
    return this.httpClient.get('RestAPI/webapi/myresource/getTask');
  }
  getBlog() {
    console.log("IN Service Blog ")
   
    return this.httpClient.get('RestAPI/webapi/myresource/getBlog');
  }
  
  /*postFile(ImageForm: any, fileToUpload: File) {
    // const endpoint='api/webapi/myresource/';
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
  
 
  setUserLoggedIn(): void { // login success
    this.isUserLogged = true;
   }
  getUserLogged(): any { // call this in AuthGuard
    return this.isUserLogged;
  }
  onLogout(event: Event) { 
    console.log("in onLogout")
    localStorage.removeItem('User');
    console.log("in onLogout")
    localStorage.clear();
    this.isUserLogged=false;
  }

}
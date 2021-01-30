import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from './../userservice.service';
import { PsyService } from '../psy.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any;
constructor(private router: Router,public service: Userservice,public service1:PsyService) {
      
   }

  ngOnInit(): void {
    this.loadCurrentUser();
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in user profile ts")
    console.log(this.user);
    
  
  }
  
  onLogout(event: Event) { 
    console.log("in onLogout")
    localStorage.removeItem('User');
    console.log("in onLogout")
    localStorage.clear();
    this.service.isUserLogged=false;
    this.service1.isPsyLogged=false;
  }

  
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from './../userservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private service: Userservice) { }

  ngOnInit(): void {
  }
  onLogout(event: Event) { 
    console.log("in onLogout")
    localStorage.removeItem('User');
    console.log("in onLogout")
    localStorage.clear();
    const isloggedIn=false
  
  }

  

}

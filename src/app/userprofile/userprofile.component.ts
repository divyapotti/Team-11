import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user: any;

  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in user profile ts")
    console.log(this.user);
  
  }

}

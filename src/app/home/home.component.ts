import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  
  }

}

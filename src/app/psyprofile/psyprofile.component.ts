import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Userservice } from './../userservice.service';


@Component({
  selector: 'app-psyprofile',
  templateUrl: './psyprofile.component.html',
  styleUrls: ['./psyprofile.component.css']
})
export class PsyprofileComponent implements OnInit {
  psy:any;
  
  constructor(private service: Userservice,private router: Router) { }

  ngOnInit(): void {
    
    this.service.getPsy().subscribe( (result: any) => {console.log(result); this.psy = result; });
    
  }
  

}

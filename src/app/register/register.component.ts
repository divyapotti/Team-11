import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Userservice } from './../userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  countries: any;
  
  user: any;
  constructor(private service: Userservice,private toster: ToastrService) {
    this.user = {userId: '', firstName: '', lastName: '', email: '', mobileNumber: '',
     password: '',conPassword:'',score:'',noOfConsultations:''};
  }

  ngOnInit() {
    

    }
    
  register(): void {
    console.log("in register user")
    console.log(this.user);
    this.service.register(this.user).subscribe((result: any) => { console.log(result); } );
    //alert("Successfully registered")
    this.toster.success('For Registering','Thank You',{timeOut:2000});
    
  }
}

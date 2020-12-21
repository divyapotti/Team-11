import { Component, OnInit } from '@angular/core';
import { PsyService } from '../psy.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-psyregister',
  templateUrl: './psyregister.component.html',
  styleUrls: ['./psyregister.component.css']
})
export class PsyregisterComponent implements OnInit {

  psy: any;
  constructor(private service: PsyService,private toster: ToastrService) {
    this.psy = {psyId: '', psyName: '', psyEmail: '', psyMobileNumber:'',psyEdu: '',psyPassword:'' ,psyconPassword:'',consultationsGiven:''};
  }

  ngOnInit() {
    }
  register(): void {
    console.log("in register psy")
    console.log(this.psy);
    this.service.register(this.psy).subscribe((result: any) => { console.log(result); } );
    //alert(" psy Successfully registered")
    this.toster.success('For Registering','Thank You',{timeOut:2000});
    
  }
}
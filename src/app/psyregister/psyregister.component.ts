import { Component, OnInit } from '@angular/core';
import { PsyService } from '../psy.service';
import { ToastrService } from 'ngx-toastr';
import { Desig } from '../models/desig.model';
import { Gender } from '../models/gender.model';
@Component({
  selector: 'app-psyregister',
  templateUrl: './psyregister.component.html',
  styleUrls: ['./psyregister.component.css']
})
export class PsyregisterComponent implements OnInit {
  desig: Desig[] = [
    { id: 1, name: 'MBBS' },
    { id: 2, name: 'MD' },
    { id: 3, name: 'Ph D' },
    { id: 4, name: 'MS' }
  ];
  gender: Gender[]=[
    { id: 1, name: 'FEMALE' },
    { id: 2, name: 'MALE' }
  ]

  psy: any;
  constructor(private service: PsyService,private toster: ToastrService) {
    this.psy = {psyId: '', psyName: '', psyEmail: '', psyMobileNumber:'',psyGender:'',psyEdu: '',psyPassword:'' ,psyconPassword:'',consultationsGiven:''};
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
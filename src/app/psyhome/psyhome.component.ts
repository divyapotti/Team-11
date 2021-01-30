import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsyService } from '../psy.service';

@Component({
  selector: 'app-psyhome',
  templateUrl: './psyhome.component.html',
  styleUrls: ['./psyhome.component.css']
})
export class PsyhomeComponent implements OnInit {
  consult: any;
  psy:any;
  

  constructor(private PsyService: PsyService,private router: Router) { }

  ngOnInit(): void {
    this.loadCurrentPsy()
    this.PsyService.getconsult(this.psy).subscribe( (result: any) => {console.log(result); this.consult = result; });
    
    console.log("in psy home ngonit")
    console.log(this.psy);

  }
  loadCurrentPsy(){
    this.psy = JSON.parse(localStorage.getItem('Psy'))
    console.log("in consultation  psy ts")
    console.log(this.psy);
  
  }
  gotoconsultationy(c:any){
    this.consult = c;
    console.log(c)
    console.log(this.consult)
    this.PsyService.consultstatusyes(this.consult,this.psy).subscribe((result: any) => { console.log(result); } );
    

  }
  gotoconsultationn(c:any){
    this.consult = c;
    console.log(c)
    console.log(this.consult)
    this.PsyService.consultstatusNo(this.consult,this.psy).subscribe((result: any) => { console.log(result); } );

  }

}
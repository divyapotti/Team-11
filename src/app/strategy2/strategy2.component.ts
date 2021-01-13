import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';


@Component({
  selector: 'app-strategy2',
  templateUrl: './strategy2.component.html',
  styleUrls: ['./strategy2.component.css']
})
export class Strategy2Component implements OnInit {
  user: any;

  closeResult: string;
  tasks: any;

  
  constructor(private service: Userservice,private modalService: NgbModal) {}
    
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  actionMethod() {
    const count = this.user.count2;
    this.user.count2 = this.user.count2+1;
    console.log(this.user.count2)
    this.service.count2(this.user).subscribe((result: any) => { console.log(result); } );
    
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.service.getTasks2().subscribe( (result: any) => {console.log(result); this.tasks = result; });
  }

}

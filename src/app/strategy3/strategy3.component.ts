import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';

@Component({
  selector: 'app-strategy3',
  templateUrl: './strategy3.component.html',
  styleUrls: ['./strategy3.component.css']
})
export class Strategy3Component implements OnInit {
  user :any;
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
    const count = this.user.count3;
    this.user.count3 = this.user.count3+1;
    console.log(this.user.count3)
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  
  }
  
  ngOnInit() {
    this.loadCurrentUser();
    this.service.getTasks3().subscribe( (result: any) => {console.log(result); this.tasks = result; });
  }
 


}

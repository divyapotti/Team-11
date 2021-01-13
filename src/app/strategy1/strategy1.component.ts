import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';

@Component({
  selector: 'app-strategy1',
  templateUrl: './strategy1.component.html',
  styleUrls: ['./strategy1.component.css']
})
export class Strategy1Component implements OnInit {
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
    const count = this.user.count1;
    this.user.count1 = this.user.count1+1;
    console.log(this.user.count1)
  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.service.getTasks1().subscribe( (result: any) => {console.log(result.strategyId); this.tasks = result; });
  }
 

}

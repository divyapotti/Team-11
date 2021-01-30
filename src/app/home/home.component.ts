import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Userservice } from './../userservice.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  closeResult: string;
  blogs: any;
  blog:any;

  constructor(private router: Router,private modalService: NgbModal,private service: Userservice) {
    this.blog={postId:'',postContent: ''}
   }
  
  ngOnInit(): void {
    this.loadCurrentUser();
    this.service.getBlog().subscribe( (result: any) => {console.log(result.strategyId); this.blogs = result; });
   
  }
  comment(){
    console.log(this.user);
    this.service.saveBlog(this.blog,this.user).subscribe();
    this.service.getBlog().subscribe( (result: any) => {console.log(result.strategyId); this.blogs = result; });
   

  }
  loadCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('User'))
    console.log("in home ts")
    console.log(this.user);
  
  }
  gotostrategy1():void{
    this.router.navigate(['strategy1']);

  }
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
  actionMethod1() {
    const count = this.user.count1;
    this.user.count1 = this.user.count1+1;
    console.log(this.user.count1)
    this.service.count1(this.user).subscribe((result: any) => { console.log(result); } );
    
  }

}

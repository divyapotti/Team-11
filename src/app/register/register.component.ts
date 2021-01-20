import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Userservice } from './../userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  /*imageUrl: string;
  fileToUpload: File = null;
  reader: FileReader; */
  
  user: any;
  constructor(private service: Userservice,private toster: ToastrService) {
    //this.imageUrl = '/assets/img/default-image.png';
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
 /*
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
  OnSubmit(imageForm: any) {
    console.log("In Image Form")
    console.log(imageForm);
    this.service.postFile(imageForm, this.fileToUpload).subscribe (
      data => {
        console.log('done');
        this.imageUrl = '/assets/Images/recipe.jpg';
      }
    );
  }*/
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PsyregisterComponent } from './psyregister/psyregister.component';
import { PsyloginComponent } from './psylogin/psylogin.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { ValidateEqualModule } from 'ng-validate-equal';
import { ToastrModule } from 'ngx-toastr';






const appRoot: Routes = [
                        {path:'', component: HomeComponent},

                        {path: 'register',  component: RegisterComponent},
                        {path:'login', component: LoginComponent},
                        {path:'psylogin', component: PsyloginComponent},
                        {path:'psyregister', component: PsyregisterComponent},
                        {path:'home', component: HomeComponent},
                      
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PsyregisterComponent,
    PsyloginComponent,
    HomeComponent,
    ConfirmEqualValidatorDirective,
  
    
    
  ],
  imports: [

BrowserModule, FormsModule,ValidateEqualModule, HttpClientModule, RouterModule.forRoot(appRoot), BrowserAnimationsModule,ToastrModule.forRoot()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


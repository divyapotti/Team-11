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
import { Strategy1Component } from './strategy1/strategy1.component';
import { Strategy2Component } from './strategy2/strategy2.component';
import { Strategy3Component } from './strategy3/strategy3.component';
import { Strategy4Component } from './strategy4/strategy4.component';
import { CommonModule } from '@angular/common';  




const appRoot: Routes = [
                        {path:'', component: HomeComponent},
                        {path:'home', component: HomeComponent},
                        {path: 'strategy1', component:Strategy1Component},
                        {path: 'strategy2', component:Strategy2Component},
                        {path: 'strategy3', component:Strategy3Component},
                        {path: 'strategy4', component:Strategy4Component},
                        {path: 'register',  component: RegisterComponent},
                        {path:'login', component: LoginComponent},
                        {path:'psylogin', component: PsyloginComponent},
                        {path:'psyregister', component: PsyregisterComponent},
                        {path:'home/strategy1', component:Strategy1Component},
                        {path:'home/strategy2', component:Strategy2Component},
                        {path:'home/strategy3', component:Strategy3Component},
                        {path:'home/strategy4', component:Strategy4Component},
                      
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
    Strategy1Component,
    Strategy2Component,
    Strategy3Component,
    Strategy4Component,
  
    
    
  ],
  imports: [

    CommonModule,BrowserModule, FormsModule,ValidateEqualModule, HttpClientModule, RouterModule.forRoot(appRoot), BrowserAnimationsModule,ToastrModule.forRoot()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PopLoginComponent } from './pop-login/pop-login.component';
import { PopSignInComponent } from './pop-sign-in/pop-sign-in.component';
import { LoginAndSignupService } from './login-and-signup.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  admin: string = "Admin";
  notAdmin: string = "Create account"
  
  constructor(private modal: NgbModal, public loginService: LoginAndSignupService, 
    public fb: FormBuilder) {
  }
  public isAuth$ = this.loginService.isAuth$;
  public register$ = this.loginService.register$;

   ngOnInit(): void {
    
  }

  login(){
    const modalRef = this.modal.open(PopLoginComponent);
    modalRef.componentInstance.title = 'Log In';
    modalRef.componentInstance.text = "Username";
    modalRef.componentInstance.text_2 = "Password";
  }

  register(){
    const modalRef = this.modal.open(PopSignInComponent);
    modalRef.componentInstance.title = 'Sign Up';
    modalRef.componentInstance.text = "Username";
    modalRef.componentInstance.text_2 = "Email Address";
    modalRef.componentInstance.text_3 = "Password";
  }

  registerName(nameRegistered:any){
    this.admin = nameRegistered;
    console.log(this.admin, this.loginService.getName);
  }

  isReg(){
    console.log(this.loginService.getName());
  }
}

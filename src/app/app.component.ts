import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { PopLoginComponent } from './pop-login/pop-login.component';
import { PopSignInComponent } from './pop-sign-in/pop-sign-in.component';
import { LoginAndSignupService } from './login-and-signup.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  admin: string = "Admin";
  notAdmin: string = "Not_Admin"
  
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
    modalRef.componentInstance.text = "Username or Email Address";
    modalRef.componentInstance.text_2 = "Password";

  }

  register(){
    const modalRef = this.modal.open(PopSignInComponent);
    modalRef.componentInstance.title = 'Sign Up';
    modalRef.componentInstance.text = "Username";
    modalRef.componentInstance.text_2 = "Email Address";
    modalRef.componentInstance.text_3 = "Password";
  }

  registerName(nameRegistered:string){
    this.admin = nameRegistered;
    console.log(this.admin);
  }
}

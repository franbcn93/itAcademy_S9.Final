import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PopLoginComponent } from './pop-login/pop-login.component';
import { PopSignInComponent } from './pop-sign-in/pop-sign-in.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  constructor(private modal: NgbModal) {
    
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
}

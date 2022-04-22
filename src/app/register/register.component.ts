import { Component, OnInit } from '@angular/core';
import { LoginAndSignupService } from '../login-and-signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  count: number = 0;
  registered: string = "👉 Register";

  constructor( public loginService: LoginAndSignupService) {
    
   }

  ngOnInit(): void {
  }

  register() {
    this.fieldEmpty(this.email, this.password, this.confirmPassword);
    if(this.count === 3){
      this.loginService.register(this.email, this.password, this.confirmPassword);
      setTimeout(() => { 
        this.registered = "Thanks 👌"        
      }, 500);
      this.registered = "You have registered correctly 👍"
    }
    this.delete();
  }
  
  fieldEmpty(email:string, password:string, confirmPassword:string){
    this.count = 0;
    if(email !== "" ){
      this.count++;
    }
    if(password !== ""){
      this.count++;
    }
    if(confirmPassword !== ""){
      this.count++;
    }  
  }
  
  delete() {
    this.email="";
    this.password="";
    this.confirmPassword="";
  }
}

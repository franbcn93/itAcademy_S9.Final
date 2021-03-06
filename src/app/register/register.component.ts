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
  registered: string = "π Register";
  chColor: boolean = false;

  constructor( public loginService: LoginAndSignupService) {
    
   }

  ngOnInit(): void {
  }

  register() {
    this.chColor = false;
    this.fieldEmpty(this.email, this.password, this.confirmPassword);
    if(this.count === 3){
      this.loginService.register(this.email, this.password, this.confirmPassword);
      setTimeout(() => {
        // Comprobem si ja estΓ  registrat l'usuari
        if(this.loginService.registered === true){
          this.chColor = true;
          this.registered = "An error occurred. That email and password is already registered π΅"
        } 
        // En cas contrari...
        else{
          this.registered = "You have registered correctly π"        
        }
      }, 500);
      this.registered = "Registering... π"
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

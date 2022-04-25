import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginAndSignupService } from '../login-and-signup.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string = "";
  password: string = "";
  count: number = 0;
  log: string = "👉 Log In";
  chColor: boolean = false;
  showPassword: boolean = false;

  constructor(public afs: AngularFirestore, 
    public loginService: LoginAndSignupService) { }

  ngOnInit(): void {
  }

  login() {
    this.chColor = false;
    this.fieldEmpty(this.email, this.password);
    if(this.count === 1){
      this.loginService.queryregister(this.email, this.password);
      setTimeout(() => { 
        if(this.loginService.registered === true){
          this.log = "You have logged correctly 👍" 
        }
        else{
          this.chColor = true;
          this.log = "User " + this.email + " is not registered in our database " +
          " or password are not correct. 🤷‍♀️"
        }
      }, 500);
    }else{
      this.chColor = true;
      this.log = "Fields cannot be empty 😥"
    }
    this.delete();
  }

  fieldEmpty(username:string, password:string){
    this.count = 0;
    if(this.email !== "" && this.password !== ""){
      this.count++;
    }
  } 

  delete() {
    this.email="";
    this.password="";
  }
}
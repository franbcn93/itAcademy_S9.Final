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

  constructor(public afs: AngularFirestore, 
    public loginService: LoginAndSignupService) { }

  ngOnInit(): void {
  }

  login() {
    this.fieldEmpty(this.email, this.password);
    if(this.count === 2){
      this.loginService.queryregister(this.email, this.password);
      setTimeout(() => { 
        if(this.loginService.registered === true){
          this.log = "You have logged correctly 👍" 
        }
        else{
          this.log = "User " + this.email + " is not registered in our database. 🤷‍♀️"
        }
        console.log( this.loginService.registered)
        // this.appC.registerName(this.loginService.register$);
        // console.log(this.loginService.name, this.loginService.register$);   
      }, 500);
      this.delete();
    }
  }

  fieldEmpty(username:string, password:string){
    this.count = 0;
    if(this.email !== ""){
      this.count++;
    }
    if(this.password !== ""){
      this.count++;
    }
  } 

  delete() {
    this.email="";
    this.password="";
  }
}
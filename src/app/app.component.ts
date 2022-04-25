import { Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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


  registerName(nameRegistered:any){
    this.admin = nameRegistered;
    console.log(this.admin, this.loginService.getName);
  }

  isReg(){
    console.log(this.loginService.getName());
  }
}

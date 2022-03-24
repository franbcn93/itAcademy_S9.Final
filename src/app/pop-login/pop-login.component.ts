import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoginAndSignupService } from '../login-and-signup.service';
import { AppComponent } from '../app.component';
import { UserData } from '../../user-data';

@Component({
  selector: 'app-pop-login',
  template: `
            <div class="modal-header">
              <h4 class="modal-title">{{title}}</h4>
              <button type="button" class="close" aria-label="Close" 
              (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="custom-form" method="post">
                <input
                  type="email"
                  [(ngModel)]="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
                <input
                  type="password"
                  [(ngModel)]="password"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
                <div class="modal-footer">
                  <button type="submit" class="btn btn-outline-warning" 
                  (click)="grabar_user_logIn()">Log In</button>
                </div>
              </form>
            </div>
          `,
  styleUrls: ['./pop-login.component.css']
})
export class PopLoginComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  email: string;
  password: string;
  // @Input() username:string = "";
  // @Input() password:string = "";
  passwordReq:string = "Password is required";
  nameReq:string = "Username is required";
  count: number = 0;
  userModel = new UserData('')
  
  constructor(public activeModal: NgbActiveModal, public afs: AngularFirestore, 
    public loginService: LoginAndSignupService, public appC: AppComponent) {
   }

  ngOnInit(): void {
  }

  // setUsername(event:any){
  //   this.username = event.target.value;
  // } 

  // setPassword(event:any){
  //   this.password = event.target.value;
  // }

  grabar_user_logIn(){
    this.fieldEmpty(this.email, this.password);
    if(this.count === 2){
      this.loginService.queryregister(this.email, this.password);
      setTimeout(() => { 
        this.appC.registerName(this.loginService.register$);
        console.log(this.loginService.name, this.loginService.register$);   
      }, 2500);
      this.activeModal.close();      
    }
  }

  fieldEmpty(username:string, password:string){
    this.count = 0;
    if(this.email !== ""){
      this.nameReq = "";
      this.count++;
    }
    if(this.password !== ""){
      this.passwordReq = "";
      this.count++;
    }
  }
}




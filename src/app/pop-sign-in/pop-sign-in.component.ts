import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoginAndSignupService } from '../login-and-signup.service';
import { AppComponent } from '../app.component';
import { UserData } from '../../user-data';

@Component({
  selector: 'app-pop-sign-in',
  template: `
            <div class="modal-header">
              <h4 class="modal-title">{{title}}</h4>
              <button type="button" class="close" aria-label="Close" 
              (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body_2">
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
                <input
                  type="password"
                  [(ngModel)]="confirmPassword"
                  name="password"
                  placeholder="Repeat the password"
                  required="required"
                />
                <div class="modal-footer">
                  <button type="submit" class="btn btn-outline-warning" 
                   (click)="grabar_user_signUp()"
                  >Sign Up</button>
                </div>
              </form>
            </div>   
          `,
  styleUrls: ['./pop-sign-in.component.css']
})
export class PopSignInComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  @Input() text_3: any;
  @Input() username:string = "";
  // @Input() email:string = "";
  // @Input() password:string = "";
  passwordReq:string = "Password is required";
  nameReq:string = "Name is required";
  count: number = 0;
  userModel = new UserData('')

  email: string;
  password: string;
  confirmPassword: string;
  

  constructor(public activeModal: NgbActiveModal, public afs: AngularFirestore, 
    public SignS: LoginAndSignupService, public appC: AppComponent) {
     }

  ngOnInit(): void {
  }

  grabar_user_signUp(){ 
    this.fieldEmpty(this.email, this.password, this.confirmPassword);
    if(this.count === 3){
      this.SignS.register(this.email, this.password, this.confirmPassword);
      setTimeout(() => { 
        // this.appC.registerName(this.SignS.name);
        this.appC.registerName(this.email);
        // console.log(this.SignS.name);   
      }, 1000);
      this.activeModal.close();      
    } 
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
}


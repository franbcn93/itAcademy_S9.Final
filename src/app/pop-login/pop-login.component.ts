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
              <input class="form-control" type="text" placeholder={{text}} (change)="setUsername($event)">
              <div>
                <small class="text-danger">{{nameReq}}</small>
              </div>
              <input class="form-control" type="password" placeholder={{text_2}} (change)="setPassword($event)">
              <div>
                <small class="text-danger">{{passwordReq}}</small>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="grabar_user_logIn()">Log In</button>
            </div>
          `,
  styleUrls: ['./pop-login.component.css']
})
export class PopLoginComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  @Input() username:string = "";
  @Input() password:string = "";
  passwordReq:string = "Password is required";
  nameReq:string = "Username is required";
  count: number = 0;
  userModel = new UserData('')
  
  constructor(public activeModal: NgbActiveModal, public afs: AngularFirestore, 
    public loginService: LoginAndSignupService, public appC: AppComponent) {
   }

  ngOnInit(): void {
  }

  setUsername(event:any){
    this.username = event.target.value;
  } 

  setPassword(event:any){
    this.password = event.target.value;
  }

  grabar_user_logIn(){
    this.fieldEmpty(this.username, this.password);
    if(this.count === 2){
      this.loginService.queryregister(this.username, this.password);
      setTimeout(() => { 
        this.appC.registerName(this.loginService.name);
        console.log(this.loginService.name);   
      }, 2500);
      this.activeModal.close();      
    }
  }

  fieldEmpty(username:string, password:string){
    this.count = 0;
    if(this.username !== ""){
      this.nameReq = "";
      this.count++;
    }
    if(this.password !== ""){
      this.passwordReq = "";
      this.count++;
    }
  }
}




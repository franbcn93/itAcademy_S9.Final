import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoginAndSignupService } from '../login-and-signup.service';
import { AppComponent } from '../app.component';

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
            <label for="">Username: </label>
              <input type="text" placeholder={{text}} (change)="setUsername($event)" #newItem>
              <br>
              <label class="labelEmail" for="">Email: </label>
              <input type="text" placeholder={{text_2}} (change)="setEmail($event)">
              <br>
              <label for="">Password: </label>
              <input type="text" placeholder={{text_3}} (change)="setPassword($event)">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="activeModal.close('Close click')" (click)="grabar_user_signUp()"
              >Sign Up</button>
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
  @Input() email:string = "";
  @Input() password:string = "";
  

  constructor(public activeModal: NgbActiveModal, public afs: AngularFirestore, 
    public SignS: LoginAndSignupService, public appC: AppComponent) {
     }

  ngOnInit(): void {
  }

  setUsername(event:any){
    this.username = event.target.value;
  } 
  
  setEmail(event:any){
    this.email = event.target.value;
  }

  setPassword(event:any){
    this.password = event.target.value;
  }

  grabar_user_signUp(){ 
    if(this.username === "" || this.email === "" || this.password === ""){
      alert("Can't be empty fields.")
    }else{
      this.SignS.register(this.username, this.email, this.password);
      setTimeout(() => { 
        this.appC.registerName(this.SignS.name);
        console.log(this.SignS.name);   
      }, 1000);
    }
  }

  // get_users_signUp(){
  //   this.SignS.getSignUp();
  // }
}


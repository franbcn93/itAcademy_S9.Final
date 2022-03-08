import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoginAndSignupService } from '../login-and-signup.service';
import { AppComponent } from '../app.component';

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
              <label for="">Username: </label>
              <input type="text" placeholder={{text}} (change)="setUsername($event)">
              <br>
              <label for="">Password: </label>
              <input type="text" placeholder={{text_2}} (change)="setPassword($event)">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="activeModal.close('Close click')" (click)="grabar_user_logIn()">Log In</button>
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
  
  constructor(public activeModal: NgbActiveModal, public afs: AngularFirestore, 
    public loginService: LoginAndSignupService, public appC: AppComponent) {
    // this.get_users(); 
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
    this.loginService.queryregister(this.username, this.password);
    setTimeout(() => { 
      this.appC.registerName(this.loginService.name);
      console.log(this.loginService.name);   
    }, 2500);
  }  
}




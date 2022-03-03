import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
              <input type="text" placeholder={{text}} (change)="setUsername($event)">
              <br>
              <label class="labelEmail" for="">Email: </label>
              <input type="text" placeholder={{text_2}} (change)="setEmail($event)">
              <br>
              <label for="">Password: </label>
              <input type="text" placeholder={{text_3}} (change)="setPassword($event)">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-warning" 
              (click)="activeModal.close('Close click')" (click)="grabar_user_signUp()">Sign Up</button>
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
  arraySign:SignUp[] = [];

  constructor(public activeModal: NgbActiveModal) { }

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
    let data = new SignUp(this.username, this.email, this.password);
    this.arraySign.push(data);
    console.log(this.arraySign);
    // this.service.setSignUp(this.username, this.email, this.password);
  }
}

export class SignUp{
  private username:string;
  private email:string;
  private password:string;

  constructor(username:string, email:string, password:string){
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
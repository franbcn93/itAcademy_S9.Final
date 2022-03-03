import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';



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
            <!-- <ul>
              <li *ngFor="let item of item$ | async">
                {{ item.name }}
              </li>
            </ul> -->
          `,
  styleUrls: ['./pop-login.component.css']
})
export class PopLoginComponent implements OnInit {

  @Input() title: any;
  @Input() text: any;
  @Input() text_2: any;
  @Input() username:string = "";
  @Input() password:string = "";
  arrayLogs: LogIn[]= [];
  // items: Observable<Item[]>;

  // private itemCollection:AngularFirestoreCollection<Item>;
  
  constructor(public activeModal: NgbActiveModal, public afs: AngularFirestore) {
    this.get_users(); 
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
    let newLogin:LogIn;
    newLogin={username: this.username, password:this.password}
    console.log(this.afs.collection("logins").add(newLogin));
    console.log(this.afs.collection("logins"))
    this.afs.collection("logins").snapshotChanges().subscribe(val => console.log(val))
    
    
  }
  
  get_users(){
    // console.log(this.afs.doc("logins/8icNOPDIwkkOk7bgxQOP").get().subscribe(val => {
    //   const doc = val.data();
    //   console.log(doc);
      
    // }))
    let userDoc = this.afs.firestore.collection("logins");
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data(), doc.data().username);
      })
   })

  }
}

interface LogIn{
   username:string;
   password:string;

  // constructor(username:string, password:string){
  //   this.username = username;
  //   this.password = password;
  // }
}


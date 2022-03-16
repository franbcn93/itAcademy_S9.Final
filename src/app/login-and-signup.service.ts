import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginAndSignupService {

  userDocSigns = this.afs.firestore.collection("signs");
  userDocLogins = this.afs.firestore.collection("logins");
  registered:boolean = false;
  name: string = "";
  public isAuth$ = new BehaviorSubject<boolean>(false);
  public register$ = new BehaviorSubject<string>("");

  constructor(public afs: AngularFirestore) { }

  getLogin(){
    let userDoc = this.afs.firestore.collection("logins");
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data(), doc.data().username);
      })
   })
  }

  async register(username:string, email:string, password:string){
    await this.userDocSigns.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           let user = doc.data();
           if(user.username === username && user.email === email){  
              this.registered = true;          
              return;
           }          
           console.log(doc.id, "=>", doc.data(), this.registered);
        })
    })

    setTimeout(() => {
      if(!this.registered){
        let newSignUp:SignUp;
        newSignUp={username: username, email:email, password:password}
        this.afs.collection("signs").add(newSignUp);
        this.registerName(username);
        alert("\n Name: " + username + "\n Email: " + email + "\n You have registered successfully. Thanks");
      }
      else{
        alert("User " + username + " is registered yet.")
      }
      this.registered = false;
    }, 1000);
  }

  registerName(username:string){
    this.name = username;
    this.isAuth$.next(true);
    this.register$.next(username);
  }

  async queryregister(username:string, password:string){ 
    await this.userDocSigns.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           let user = doc.data();
           if(user.username === username){                         
              this.registered = true;          
              return;
           }          
           console.log(doc.id, "=>", doc.data(), this.registered);
        })
    })
  
    setTimeout(() => {
      if(this.registered){
        let newLogIn:LogIn;
        newLogIn={username: username, password:password}
        this.afs.collection("logins").add(newLogIn);
        this.registerName(username);
        alert("\n Name: " + username + "\n You have successfully logged in. Thanks");
      }
      else{
        alert("User " +username + " is not registered in our database.")
      }
      this.registered = false;
    }, 1000);
  }

  getName(){
    setTimeout(() => { 
      return this.name;    
    }, 1200);
  }
}


interface SignUp{
  username:string;
  email:string;
  password:string;
}

interface LogIn{
  username:string;
  password:string;
}
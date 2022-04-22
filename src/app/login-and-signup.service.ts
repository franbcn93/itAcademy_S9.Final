import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginAndSignupService {

  userSigns = this.afs.firestore.collection("signs");
  userLogs = this.afs.firestore.collection("logins");
  registered:boolean = false;
  name: string = "";
  public isAuth$:BehaviorSubject<boolean>;
  public register$:BehaviorSubject<string>;
  emailN: string;
  

  constructor(public afs: AngularFirestore) {
    this.isAuth$ = new BehaviorSubject<boolean>(false);
    this.register$ = new BehaviorSubject<string>("");
   }

   async getLogin(){
    await this.userLogs.get().then((query) => { 
      query.forEach((doc) => {
           console.log(doc.id, "=>", doc.data(), doc.data().username);
      })
   })
  }

  async register(email:string, password:string, confirmPassword:string){
    await this.userSigns.get().then((query) => { 
      query.forEach((doc) => {
           let user = doc.data();
           if(user.email === email && user.password === password){  
              this.registered = true;          
              return;
           }          
           console.log(doc.id, "=>", doc.data(), this.registered);
        })
    })

    setTimeout(() => {
      if(!this.registered){
        if(password != confirmPassword){
          alert("Two passwords are not equals")
        }else{
          let newSignUp:SignUp;
          newSignUp={email: email, password:password, confirmPassword:confirmPassword}
          this.afs.collection("signs").add(newSignUp);
          this.registerName(email);
          // alert("\n Email: " + email + "\n Password: " + password + "\n You have registered successfully. Thanks");
        }
      }
      else{
        alert("Email " + email + " is registered yet.")
      }
      this.registered = false;
    }, 1000);
  }

  registerName(email:string){
    this.name = email;
    this.isAuth$.next(true);
    this.register$.next(email);
    this.emailN = email;
  }

  async queryregister(email:string, password:string){ 
    await this.userSigns.get().then((query) => { 
      query.forEach((doc) => {
           let user = doc.data();
           console.log(doc.id, "=>", doc.data(), user.email);
           if(user.email === email){                         
              this.registered = true;          
              return;
           }          
        })
    })
  
    setTimeout(() => {
      if(this.registered){
        let newLogIn:LogIn;
        newLogIn={email: email, password:password}
        this.afs.collection("logins").add(newLogIn);
        this.registerName(email);
      }
      this.registered = false;
    }, 1000);
  }

  getName(){
      return this.emailN;       
  }

  getIsAuth(){
    setTimeout(() => { 
      return this.isAuth$;    
    }, 1200);   
  }

  
}


interface SignUp{
  email:string;
  password:string;
  confirmPassword:string;
}

interface LogIn{
  email:string;
  password:string;
}
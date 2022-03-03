import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstruccionsComponent } from './instruccions/instruccions.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopLoginComponent } from './pop-login/pop-login.component';
import { PopSignInComponent } from './pop-sign-in/pop-sign-in.component';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestore } from '@angular/fire/firestore';

const routes: Routes=[
  {path: '', component:HomeComponent},
  {path: 'instruccions', component:InstruccionsComponent},
  {path: 'contact', component:ContactComponent},
  // {path: 'login', component:LoginComponent},
  // {path: 'register', component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstruccionsComponent,
    ContactComponent,
    WeatherComponent,
    LoginComponent,
    RegisterComponent,
    PopLoginComponent,
    PopSignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

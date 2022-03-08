import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './weather/weather.component';
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
import { LoginAndSignupService } from './login-and-signup.service';
import { HomeChildComponent } from './home-child/home-child.component';
import { StationsComponent } from './stations/stations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {path: '', component:HomeComponent},
  {path: 'stations', component:StationsComponent},
  {path: 'contact', component:ContactComponent},
  // {path: 'login', component:LoginComponent},
  // {path: 'register', component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WeatherComponent,
    RegisterComponent,
    PopLoginComponent,
    PopSignInComponent,
    HomeChildComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [AngularFirestoreModule, AppComponent],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

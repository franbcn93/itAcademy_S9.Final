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

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeChildComponent } from './home-child/home-child.component';
import { StationsComponent } from './stations/stations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes=[
  {path: '', component:HomeComponent},
  {path: 'stations', component:StationsComponent},
  {path: 'contact', component:ContactComponent},
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
    StationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestoreModule, AppComponent],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

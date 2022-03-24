import { Component, OnInit } from '@angular/core';
import { LoginAndSignupService } from '../login-and-signup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private service: LoginAndSignupService) { 
    console.log(service.getIsAuth())
  }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = ['English: Hello', 'French: Salut', 'German: Hallo', 'Italian: Ciao'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

  recibiRespuesta(respuesta:any) {
    alert(respuesta);
   }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-child',
  template: `
    <label for="item-input">Add new one if you know:</label>
    <input type="text" maxlength="8" id="item-input" #newItem>
    <button type="button" class="btn btn-primary" (click)="addNewItem(newItem.value)">Add greeting</button>
  `,
  styles: [
    'button{margin-left:20px}', 'input{width: 110px; margin-left:10px}'
  ]
})
export class HomeChildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

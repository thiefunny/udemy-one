import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dziecko',
  templateUrl: './dziecko.component.html',
  styleUrls: ['./dziecko.component.css']
})
export class DzieckoComponent implements OnInit {

  @Output() dzieckoEmmiter = new EventEmitter<string>();

  onDzieckoEmit(value:string) {
    this.dzieckoEmmiter.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

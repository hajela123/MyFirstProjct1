import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  count=0;

  constructor() { }

  ngOnInit() {
  }
  
  y=setInterval(()=>{this.count++},1000)

  displayCount(){
    this.parentcount.emit(this.count);
  }
    @Output() parentcount = new EventEmitter();


}

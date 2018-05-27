import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {

  @Input() parentInput;
  

  constructor() { }

  ngOnInit() {
  }
  
  iamchilinputdmetod(){
    alert(this.parentInput);
  }
}

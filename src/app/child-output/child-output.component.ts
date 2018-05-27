import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
@Output() change = new EventEmitter();
  constructor() { }

  call(){
    this.change.emit();
  }
  ngOnInit() {
  }

}

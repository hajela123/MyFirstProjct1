import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private mylibrarybooks: MyServiceService){

}
  
   printbooks= this.mylibrarybooks.books;

  title = 'app';
  styleobj={
    'border' :"1px solid red",
    'background-color' :"#ddd",

  }
  class0bj={
    'para1':'true',
    'para2':'false',
  }
  styleFunc(){ 
        return this.styleobj;

  }
  classFunc(){ 
    return this.class0bj;

}
}

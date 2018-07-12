import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { C2Component } from './c2/c2.component';


@Injectable({
  providedIn: 'root'
})
export class EmptyContactService implements CanDeactivate<C2Component> {

  constructor() { }

  canDeactivate(component : C2Component) {
    if(component.contactNumber.length > 0)
    {
      return true;
    }else{
      alert('You have not added any contact number, please add');
      return false;
    }
      
  }

}

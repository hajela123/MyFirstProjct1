import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1f1Component } from './c1f1.component';

describe('C1f1Component', () => {
  let component: C1f1Component;
  let fixture: ComponentFixture<C1f1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1f1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

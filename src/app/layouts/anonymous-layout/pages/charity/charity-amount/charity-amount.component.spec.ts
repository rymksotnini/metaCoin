import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityAmountComponent } from './charity-amount.component';

describe('CharityAmountComponent', () => {
  let component: CharityAmountComponent;
  let fixture: ComponentFixture<CharityAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComplainComponent } from './list-complain.component';

describe('ListComplainComponent', () => {
  let component: ListComplainComponent;
  let fixture: ComponentFixture<ListComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

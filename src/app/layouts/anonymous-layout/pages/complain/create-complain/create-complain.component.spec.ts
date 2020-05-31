import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplainComponent } from './create-complain.component';

describe('CreateComplainComponent', () => {
  let component: CreateComplainComponent;
  let fixture: ComponentFixture<CreateComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityUpdateComponent } from './charity-update.component';

describe('CharityUpdateComponent', () => {
  let component: CharityUpdateComponent;
  let fixture: ComponentFixture<CharityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

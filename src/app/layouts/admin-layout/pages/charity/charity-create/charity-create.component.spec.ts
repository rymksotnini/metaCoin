import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityCreateComponent } from './charity-create.component';

describe('CharityCreateComponent', () => {
  let component: CharityCreateComponent;
  let fixture: ComponentFixture<CharityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

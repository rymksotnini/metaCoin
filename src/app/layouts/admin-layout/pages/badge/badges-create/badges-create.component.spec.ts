import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesCreateComponent } from './badges-create.component';

describe('BadgesCreateComponent', () => {
  let component: BadgesCreateComponent;
  let fixture: ComponentFixture<BadgesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

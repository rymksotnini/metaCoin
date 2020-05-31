import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesUpdateComponent } from './badges-update.component';

describe('BadgesUpdateComponent', () => {
  let component: BadgesUpdateComponent;
  let fixture: ComponentFixture<BadgesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

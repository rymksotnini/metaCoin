import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityProjectsComponent } from './charity-projects.component';

describe('CharityProjectsComponent', () => {
  let component: CharityProjectsComponent;
  let fixture: ComponentFixture<CharityProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

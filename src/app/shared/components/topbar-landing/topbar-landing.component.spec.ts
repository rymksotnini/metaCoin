import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarLandingComponent } from './topbar-landing.component';

describe('TopbarLandingComponent', () => {
  let component: TopbarLandingComponent;
  let fixture: ComponentFixture<TopbarLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

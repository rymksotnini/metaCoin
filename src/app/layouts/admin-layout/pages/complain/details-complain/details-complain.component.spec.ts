import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComplainComponent } from './details-complain.component';

describe('DetailsComplainComponent', () => {
  let component: DetailsComplainComponent;
  let fixture: ComponentFixture<DetailsComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

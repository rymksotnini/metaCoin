import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbAuthComponent } from './fb-auth.component';

describe('FbAuthComponent', () => {
  let component: FbAuthComponent;
  let fixture: ComponentFixture<FbAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

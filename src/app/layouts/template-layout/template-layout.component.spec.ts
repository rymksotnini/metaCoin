import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLayoutComponent } from './template-layout.component';

describe('TemplateLayoutComponent', () => {
  let component: TemplateLayoutComponent;
  let fixture: ComponentFixture<TemplateLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

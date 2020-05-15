import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdesignationComponent } from './listdesignation.component';

describe('ListdesignationComponent', () => {
  let component: ListdesignationComponent;
  let fixture: ComponentFixture<ListdesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

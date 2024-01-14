import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierMainOeuvreComponent } from './planifier-main-oeuvre.component';

describe('PlanifierMainOeuvreComponent', () => {
  let component: PlanifierMainOeuvreComponent;
  let fixture: ComponentFixture<PlanifierMainOeuvreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanifierMainOeuvreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanifierMainOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

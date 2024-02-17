import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanningComponent } from './maintenance-planning.component';

describe('MaintenancePlanningComponent', () => {
  let component: MaintenancePlanningComponent;
  let fixture: ComponentFixture<MaintenancePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenancePlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintenancePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

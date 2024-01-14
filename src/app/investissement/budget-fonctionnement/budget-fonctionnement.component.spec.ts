import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFonctionnementComponent } from './budget-fonctionnement.component';

describe('BudgetFonctionnementComponent', () => {
  let component: BudgetFonctionnementComponent;
  let fixture: ComponentFixture<BudgetFonctionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetFonctionnementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetFonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

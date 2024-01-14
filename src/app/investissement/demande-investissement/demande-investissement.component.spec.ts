import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInvestissementComponent } from './demande-investissement.component';

describe('DemandeInvestissementComponent', () => {
  let component: DemandeInvestissementComponent;
  let fixture: ComponentFixture<DemandeInvestissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandeInvestissementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeInvestissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

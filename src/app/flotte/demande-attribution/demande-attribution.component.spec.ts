import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAttributionComponent } from './demande-attribution.component';

describe('DemandeAttributionComponent', () => {
  let component: DemandeAttributionComponent;
  let fixture: ComponentFixture<DemandeAttributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandeAttributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeAttributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

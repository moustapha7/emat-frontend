import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMaterielComponent } from './fiche-materiel.component';

describe('FicheMaterielComponent', () => {
  let component: FicheMaterielComponent;
  let fixture: ComponentFixture<FicheMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheMaterielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

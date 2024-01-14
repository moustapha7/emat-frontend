import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePVComponent } from './fiche-pv.component';

describe('FichePVComponent', () => {
  let component: FichePVComponent;
  let fixture: ComponentFixture<FichePVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichePVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichePVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmatComponent } from './emat.component';

describe('EmatComponent', () => {
  let component: EmatComponent;
  let fixture: ComponentFixture<EmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

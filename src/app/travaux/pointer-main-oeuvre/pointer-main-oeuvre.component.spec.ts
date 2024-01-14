import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerMainOeuvreComponent } from './pointer-main-oeuvre.component';

describe('PointerMainOeuvreComponent', () => {
  let component: PointerMainOeuvreComponent;
  let fixture: ComponentFixture<PointerMainOeuvreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointerMainOeuvreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointerMainOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

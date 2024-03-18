import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDepartementComponent } from './user-departement.component';

describe('UserDepartementComponent', () => {
  let component: UserDepartementComponent;
  let fixture: ComponentFixture<UserDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDepartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrganisationComponent } from './user-organisation.component';

describe('UserOrganisationComponent', () => {
  let component: UserOrganisationComponent;
  let fixture: ComponentFixture<UserOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrganisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

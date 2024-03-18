import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserOrganisationComponent } from './add-user-organisation.component';

describe('AddUserOrganisationComponent', () => {
  let component: AddUserOrganisationComponent;
  let fixture: ComponentFixture<AddUserOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserOrganisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUserOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

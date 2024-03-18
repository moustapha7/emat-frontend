import { Component, OnInit } from '@angular/core';
import { R5UserOrganisationService } from '../../../services/r5userorganisation.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { R5UserOrganisation, R5UserOrganisation2 } from '../../../models/r5userorganisation.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Organisation, Organisation2 } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: 'app-add-user-organisation',
  templateUrl: './add-user-organisation.component.html',
  styleUrl: './add-user-organisation.component.css'
})
export class AddUserOrganisationComponent implements OnInit {

  addForm! : FormGroup;
  r5userOrganisation2 : R5UserOrganisation2 =new R5UserOrganisation2();
  errorMessage! : '';
  submitted = false;
  isFailed = false;

  selectedOrganisation!:Organisation2;
  organisations! : Organisation2[];


  constructor(private userOrg: R5UserOrganisationService,
       private formBuilder : FormBuilder, private route : Router, private orgService : OrganisationService){}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      uogorg : ['',  [Validators.required, Validators.minLength(4)]],
      uogdesc : ['',  [Validators.required, Validators.minLength(4)]],
      username :['',  [Validators.required, Validators.minLength(2)]],
      uoggroup: ['',  [Validators.required, Validators.minLength(2)]],
      uogcommun: false,
      uogdefaut:false,
      organisation2: ['',  [Validators.required]],

    });

    this.listOrgForSelect();
  }

  get f() { return this.addForm.controls; }

  saveR5UserOrganisation(){
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }

    this.r5userOrganisation2.organisation2 = this.selectedOrganisation;
    console.log(this.selectedOrganisation);

    this.userOrg.createUserOrganisation(this.addForm.value).subscribe(

      result =>
      {
        Swal.fire({
          title: `Entité bien ajoutée`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.addForm.reset();
        this.route.navigate(['emat/user-organisations']);

      },
      error => {
         console.log('error to save origanisation'); 
         this.errorMessage = error.error.message;
         this.isFailed = true;
      }
    ) 
  }

  listOrgForSelect(){
    this.orgService.getAllOrganisations().subscribe(
      result =>{
        this.organisations = result;
      }
    )
  }


}

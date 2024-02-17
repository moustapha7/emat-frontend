import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../../services/organisation.service';
import { Organisation, Organisation2 } from '../../../models/organisation.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrl: './add-organisation.component.css'
})

export class AddOrganisationComponent implements OnInit {


  addForm!: FormGroup;
  errorMessage! : '';
  submitted = false;
  organisation! : any ;
  organisations! : Organisation[];
  id!: number;
  itemId!: number;


  constructor(private orgService: OrganisationService,private router: Router, 
    private formBuilder : FormBuilder, private actRoute : ActivatedRoute) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      
      entite : ['',  [Validators.required, Validators.minLength(4)]],
      description :['',   [Validators.required, Validators.minLength(5)]],
    });
  }


  //get f() { return this.addForm.controls; }

  get f(): { [key: string]: AbstractControl } {
    return this.addForm.controls;
  }

  
  saveOrganisation()
  {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.orgService.createOrganisation(this.addForm.value).subscribe(
      result =>
      {
        alert("Success Save");
        this.addForm.reset();
        this.router.navigate(['organisations']);
        this.listOrganisations();

      },
      error => {
         console.log('error to save origanisation'); 
         this.errorMessage = error.error.message;
        

      }
     
    )
    

  }

  onReset() {
    this.submitted = false;
    this.addForm.reset();
  }

  listOrganisations (){
    this.orgService.getAllOrganisations().subscribe(
      result =>{
        this.organisations = result;
      }
    )
  }

}

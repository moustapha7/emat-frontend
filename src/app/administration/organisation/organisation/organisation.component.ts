import { Component } from '@angular/core';
import { Organisation, Organisation2 } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface DataItem {
  entite: string;
  description: string;
}

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrl: './organisation.component.css'
})
export class OrganisationComponent {

  organisations! : Organisation[];
  addForm!: FormGroup;
  errorMessage! : '';
  submitted = false;
  organisation! : Organisation ;
  organisation2! : any ;

  id!: number;
  itemId!: number;
  currentIndex = -1;
  currentOrg: Organisation2 = {
    id: 0,
    entite: '',
    description: ''
  };


  constructor(private orgService : OrganisationService, private route : Router,private formBuilder : FormBuilder,
          private actRoute: ActivatedRoute) {}


  ngOnInit(){
    this.listOrganisations();
    this.addForm = this.formBuilder.group({
      
      entite : ['',  [Validators.required, Validators.minLength(2)]],
      description :['',   [Validators.required, Validators.minLength(4)]],
    });

    // this.id = this.actRoute.snapshot.params['id'];
    // this.orgService.getOrgById(this.id).subscribe(
    //   (data : any)=> {
    //   this.organisation= data;
    //   });  
  }
 
  setActiveOrganisation(organisation: Organisation2, index: number): void {
    this.currentOrg = organisation;
    this.currentIndex = index;
  }

  listOrganisations (){
    this.orgService.getAllOrganisations().subscribe(
      result =>{
        this.organisations = result;
      }
    )
  }



  selectedData: DataItem = { entite: '', description: '' };
  selectedIdx: number | null = null;

  displayData(data: DataItem, index: number) {
    this.selectedData = data;
    this.selectedIdx = index;
  }

  updateOrg(id : number)  {
 
    this.route.navigate(['edit-organisations', id]);
  }

  submitForm() {
    // Add logic to handle form submission if needed
    console.log('Form submitted:', this.selectedData);
  }

}

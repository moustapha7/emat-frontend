import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Organisation, Organisation2 } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: 'app-edit-organisation',
  templateUrl: './edit-organisation.component.html',
  styleUrl: './edit-organisation.component.css'
})
export class EditOrganisationComponent implements OnInit {

  
  addForm!: FormGroup;
  errorMessage! : '';
  submitted = false;
  organisation! : Organisation ;
  organisation2! : any ;

  organisations! : Organisation[];
  id!: number;
  itemId!: number;

  selectedData: any;

  @Input() viewMode = false;

  @Input() currentOrg: Organisation2 = {
    id: 0,
    entite: '',
    description: ''
  };

  message ='';
  constructor(private orgService: OrganisationService,private router: Router, 
    private formBuilder : FormBuilder, private actRoute : ActivatedRoute) {}

  ngOnInit() {

   this.id = this.actRoute.snapshot.params['id'];
   this.updateOrg(this.id);


    this.orgService.getOrgById(this.id).subscribe(
      (data : any)=> {
      this.organisation= data;
      });  

      // if (!this.viewMode) {
      //   this.message = '';
      //   this.getOrgById(this.actRoute.snapshot.params["id"]);
      // }

    this.addForm = this.formBuilder.group({
      entite : ['',  [Validators.required, Validators.minLength(4)]],
      description :['',   [Validators.required, Validators.minLength(5)]],
    });

   
      this.orgService.selectedData$.subscribe((data) => {
        this.selectedData = data;
      });
  }


  get f() {
    return this.addForm.controls;
  }

  getOrgById(id:any){
    
    this.orgService.getOrgById(this.id).subscribe(
      (data : any)=> {
      this.organisation= data;
      }); 
  }

  updateOrg(id : number)  {
 
    this.router.navigate(['emat/edit-organisations', id]);
    this.listOrganisations();
   
  }


  updateOrganisation()
  {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.orgService.updateOrg(this.id,this.addForm.value).subscribe(
      result =>
      {
        alert("Success Update");
        this.addForm.reset();
        this.router.navigate(['emat/organisations']);
        this.listOrganisations();

      },
      error => {
         console.log('error to save origanisation'); 
        // this.errorMessage = error.error.message;
        

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

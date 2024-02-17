import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';
import { Router } from '@angular/router';



// interface DataItem {
//   entite: string;
//   description: string;
// }

@Component({
  selector: 'app-list-organisation',
  templateUrl: './list-organisation.component.html',
  styleUrl: './list-organisation.component.css'
})
export class ListOrganisationComponent implements OnInit{


  organisations! : Organisation[];
  constructor(private orgaService : OrganisationService, private route : Router) {}


  ngOnInit(){
    this.listOrganisations();
  }

  listOrganisations (){
    this.orgaService.getAllOrganisations().subscribe(
      result =>{
        this.organisations = result;
      }
    )
  }

  updateOrg(id : number)  {
 
    this.route.navigate(['edit-organisations', id]);
  }


  // selectedData: DataItem = { entite: '', description: '' };
  // selectedIdx: number | null = null;

  // displayData(data: DataItem, index: number) {
  //   this.selectedData = data;
  //   this.selectedIdx = index;
  // }

  submitForm() {
    // Add logic to handle form submission if needed
   // console.log('Form submitted:', this.selectedData);
  }

  deleteOrg(o : Organisation) {
    let conf =confirm("Etes vous sure ?")
    if(!conf) return;
    this.orgaService.deleteOrg(o.id).subscribe({
      next : (resp) =>{
        alert("Entité deleted succesfully");

        this.listOrganisations();
      },
      error : err =>{
        console.log(err);
      }
    });
  }

}

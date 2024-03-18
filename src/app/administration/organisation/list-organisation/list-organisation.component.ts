import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



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
 
    this.route.navigate(['emat/edit-organisations', id]);
  }


  deleteOrg(o : Organisation) {
    Swal.fire({
      title: "Voulez vous supprimer l'entité ?",
      //text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orgaService.deleteOrg(o.id).subscribe({
          next : (resp) =>{

            Swal.fire(
              'Deleted!',
              'Entité bien supprimée.',
              'success'
            )
            this.listOrganisations();
          },
          error : err =>{
            Swal.fire(
              err.error.message,
            )
          }
        });
        
      } 
    });
  }

}

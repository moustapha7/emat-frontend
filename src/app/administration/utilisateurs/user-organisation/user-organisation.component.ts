import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { R5UserOrganisationService } from '../../../services/r5userorganisation.service';
import { R5UserOrganisation } from '../../../models/r5userorganisation.model';
import { StorageService } from '../../../_services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-organisation',
  templateUrl: './user-organisation.component.html',
  styleUrl: './user-organisation.component.css'
})
export class UserOrganisationComponent implements OnInit{

  r5UserOrganisations! : R5UserOrganisation[];
  currentUser: any;

  constructor(private route: Router, private userOrgService: R5UserOrganisationService, private storageService: StorageService){}

  ngOnInit(): void {
    this.listUserOrganisationByUserConnected();
  }

  listUserOrganisationByUserConnected(){
    this.currentUser = this.storageService.getUser();

    this.userOrgService.getAllOrganisationByUser(this.currentUser.username).subscribe(
      data =>{
        this.r5UserOrganisations = data;
        
      }
    )
  }

  deleteR5UserOrg(uo : R5UserOrganisation) {
    Swal.fire({
      title: "Voulez vous supprimer l'entité ?",
      //text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userOrgService.deleteR5UserOrg(uo.id).subscribe({
          next : (resp) =>{

            Swal.fire(
              'Deleted!',
              'Entité bien supprimée.',
              'success'
            )
            this.listUserOrganisationByUserConnected();
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

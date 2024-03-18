import { Component, Input, OnInit } from '@angular/core';
import { Organisation2 } from '../../../models/organisation.model';
import { OrganisationService } from '../../../services/organisation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrl: './organisation-details.component.css'
})
export class OrganisationDetailsComponent implements OnInit {


  @Input() viewMode = false;

  @Input() currentOrg: Organisation2 = {
    id: 0,
    entite: '',
    description: ''
  };

  message = '';

  constructor(
    private orgService: OrganisationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getOrg(this.route.snapshot.params["id"]);
    }
  }

  getOrg(id:any){
    this.orgService.getOrgById(id).subscribe(
      (data : any)=> {
      this.currentOrg= data;
      });  

  }
 


}


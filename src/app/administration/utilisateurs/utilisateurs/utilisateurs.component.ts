import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent implements OnInit {

  utilisateurs! : User[];
  addForm!: FormGroup;
  errorMessage! : '';
  submitted = false;
  currentIndex = -1;
  utilisateur! : User;
  currentuser!: User;

  
  constructor(private orgService : OrganisationService, private route : Router,private formBuilder : FormBuilder,
    private actRoute: ActivatedRoute,private userService : UserService) {}

  ngOnInit() {
    this.listUsers();
  }


  setActiveUser(utilisateur: User, index: number): void {
    this.currentuser = utilisateur;
    this.currentIndex = index;
  }

  listUsers(){
    this.userService.getAllUsers().subscribe(
      data =>{
        this.utilisateurs = data;
      }
    )
  }

  onReset() {
    this.submitted = false;
    this.addForm.reset();
  }

}

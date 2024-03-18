import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../models/user.model';
import { StorageService } from '../../../_services/storage.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrl: './list-utilisateur.component.css'
})
export class ListUtilisateurComponent implements OnInit {

  utilisateurs! : User[];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  isAdmin = false;


  constructor(private userService : UserService, private route : Router, private storageService: StorageService){}

  ngOnInit() {
    this.listUsers();
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.isAdmin = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }


  listUsers(){
    this.userService.getAllUsers().subscribe(
      data =>{
        this.utilisateurs = data;
      }
    )
  }

}

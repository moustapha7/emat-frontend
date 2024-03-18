import { Component } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

  isLoggedIn = true;
  currentUser: any;
  isconnected = false;

  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  showClientBoard = false;
  isAdmin = false;
  isDev = false;
  isPOwner = false ;
  isTechLead = false;


  private roles!: string[];

  username!: string;
  loggedUser! : string;
  constructor(private tokenStorageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.isLoggedIn();

    this.currentUser = this.tokenStorageService.getUser();


    this.isLoggedIn = !!this.tokenStorageService.getToken();
  //  this.isConnecte = this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.isAdmin =this.roles.includes('ROLE_ADMIN');
      this.isDev =this.roles.includes('ROLE_DEV');
      this.isTechLead =this.roles.includes('ROLE_TEACHLEAD');
      this.isPOwner =this.roles.includes('ROLE_POWNER');


      this.username = user.username;

    }
  }

}

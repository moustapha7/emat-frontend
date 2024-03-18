import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environnements/environnement';
import { BehaviorSubject } from 'rxjs';
import { R5UserOrganisation } from '../models/r5userorganisation.model';

@Injectable({
  providedIn: 'root'
})
export class R5UserOrganisationService {


  constructor(private http: HttpClient) { }


  public getAllOrganisationByUser(username : String): Observable<R5UserOrganisation[]> {
    return this.http.get<R5UserOrganisation[]>(environment.backendHost+"/api/emat/userOrganisations/"+username);
  }

  createUserOrganisation(r5UserOrganisation : R5UserOrganisation): Observable<Object> {
    return this.http.post<R5UserOrganisation[]>(environment.backendHost+"/api/emat/saveUserOrganisation",r5UserOrganisation);
  }

  getOrgById(id : number)  {
    return this.http.get(environment.backendHost+"/api/emat/organisations/"+id);
  }

  getOrgByEntite(entite : string)  {
    return this.http.get(environment.backendHost+"/api/emat/organisations/"+entite);
  }

  updateOrg(id:number, r5UserOrganisation : R5UserOrganisation): Observable<Object> {
    return this.http.put<R5UserOrganisation[]>(`${environment.backendHost}/api/emat/updateOrganisations/${id}`, r5UserOrganisation);

  }

  deleteR5UserOrg(id : number) {
    return this.http.delete(environment.backendHost+"/api/emat/deleteR5userOrg/"+id);
  }
}
 

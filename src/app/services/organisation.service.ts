import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Organisation, Organisation2 } from '../models/organisation.model';
import { environment } from '../../environnements/environnement';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {


  constructor(private http: HttpClient) { }

  private selectedDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedData$: Observable<any> = this.selectedDataSubject.asObservable();

  
  setSelectedData(data: any) {
    this.selectedDataSubject.next(data);
  }

  public getAllOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(environment.backendHost+"/api/emat/organisations");
  }

  createOrganisation(organisation : Organisation): Observable<Object> {
    return this.http.post<Organisation[]>(environment.backendHost+"/api/emat/saveOrganisations",organisation);
  }

  getOrgById(id : number)  {
    return this.http.get(environment.backendHost+"/api/emat/organisations/"+id);
  }

  getOrgByEntite(entite : string)  {
    return this.http.get(environment.backendHost+"/api/emat/organisations/"+entite);
  }

  updateOrg(id:number, organisation : Organisation): Observable<Object> {
    return this.http.put<Organisation[]>(`${environment.backendHost}/api/emat/updateOrganisations/${id}`, organisation);

  }

  deleteOrg(id : number) {
    return this.http.delete(environment.backendHost+"/api/emat/organisations/"+id);
  }
}
 

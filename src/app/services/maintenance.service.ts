// maintenance.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  // Exemple de données pour la liste de personnes
  persons = ['Personne 1', 'Personne 2', 'Personne 3'];

  // Exemple de données pour les événements de maintenance
  maintenanceEvents: MaintenanceEvent[] = [
    { id: 1, title: 'Maintenance 1', startTime: new Date(), endTime: new Date(), person: 'Personne 1' },
    { id: 2, title: 'Maintenance 2', startTime: new Date(), endTime: new Date(), person: 'Personne 2' },
    // Ajoutez d'autres événements de maintenance si nécessaire
  ];

  // Observable pour les personnes
  private personsSubject = new BehaviorSubject<string[]>([]);
  persons$ = this.personsSubject.asObservable();

  // Observable pour les événements de maintenance
  private maintenanceEventsSubject = new BehaviorSubject<MaintenanceEvent[]>([]);
  maintenanceEvents$ = this.maintenanceEventsSubject.asObservable();

  // Méthode pour mettre à jour les personnes
  updatePersons(persons: string[]) {
    this.persons = persons;
    this.personsSubject.next(persons);
  }

  // Méthode pour mettre à jour les événements de maintenance
  updateMaintenanceEvents(events: MaintenanceEvent[]) {
    this.maintenanceEvents = events;
    this.maintenanceEventsSubject.next(events);
  }
}

export interface MaintenanceEvent {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  person: string;
}

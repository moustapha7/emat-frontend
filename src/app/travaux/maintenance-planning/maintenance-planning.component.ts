// maintenance-planning.component.ts
import { Component, OnInit } from '@angular/core';
import { MaintenanceEvent, MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance-planning',
  templateUrl: './maintenance-planning.component.html',
  styleUrls: ['./maintenance-planning.component.css']
})
export class MaintenancePlanningComponent implements OnInit {
  persons: string[] = [];
  maintenanceEvents: MaintenanceEvent[] = [];

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit() {
    // Souscrire aux données du service
    this.maintenanceService.persons$.subscribe(persons => this.persons = persons);
    this.maintenanceService.maintenanceEvents$.subscribe(events => this.maintenanceEvents = events);
  }

  // Méthode appelée lorsqu'un élément est lâché dans le calendrier
  onDrop(event: any) {
    // Implémentez la logique de traitement du drop ici
    // Vous pouvez obtenir les données de l'élément lâché à partir de l'événement
    console.log(event);
  }
}

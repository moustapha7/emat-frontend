// sidebar.component.ts
import { Component, Input } from '@angular/core';
import { MaintenanceService, MaintenanceEvent } from '../../../services/maintenance.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() persons: string[] = [];

  constructor(private maintenanceService: MaintenanceService) {}

  // Méthode appelée lorsqu'un élément de la liste de personnes est lâché dans le calendrier
  onDragStart(person: string, event: DragEvent) {
    // Utilisez les données de la personne pour créer un nouvel événement de maintenance
    const newEvent: MaintenanceEvent = {
      id: Date.now(),
      title: `Maintenance pour ${person}`,
      startTime: new Date(),
      endTime: new Date(),
      person: person
    };

    // Mettez à jour les événements de maintenance dans le service
    this.maintenanceService.updateMaintenanceEvents([...this.maintenanceService.maintenanceEvents, newEvent]);

    // Empêchez l'événement de drag-and-drop par défaut
    event.preventDefault();
  }
}

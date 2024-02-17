// calendar.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaintenanceEvent } from '../../../services/maintenance.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
onDragOver($event: DragEvent) {
throw new Error('Method not implemented.');
}
  @Input() events: MaintenanceEvent[] = [];
  @Output() drop = new EventEmitter<DragEvent>();

  // Méthode appelée lorsqu'un élément est lâché dans le calendrier
  onDrop(event: DragEvent) {
    this.drop.emit(event);
  }
}

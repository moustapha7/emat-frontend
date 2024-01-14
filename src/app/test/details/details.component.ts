// details.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() recordId!: number;
  record: any;
selectedRecordId!: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadDetails(this.recordId);
  }

  loadDetails(id: number): void {
    this.dataService.getRecordById(id).subscribe(data => {
      this.record = data;
    });
  }
}

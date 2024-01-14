// sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dataList: any[] = [];
  selectedRecordId!: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getDataList().subscribe(data => {
      this.dataList = data;
    });
  }

  loadDetails(id: number): void {
    this.selectedRecordId = id;
  }
}

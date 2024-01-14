// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataList: any[] = [
    { id: 1, name: 'Enregistrement 1', description: 'Description 1' },
    { id: 2, name: 'Enregistrement 2', description: 'Description 2' },
    // ... ajoutez d'autres enregistrements
  ];

  getDataList(): Observable<any[]> {
    return of(this.dataList);
  }

  getRecordById(id: number): Observable<any> {
    const record = this.dataList.find(item => item.id === id);
    return of(record);
  }
}

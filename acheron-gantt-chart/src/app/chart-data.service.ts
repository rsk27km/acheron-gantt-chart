import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private httpClient: HttpClient) { }

  getAllChartData(): Observable<any> {
    return this.httpClient.get('assets/project-data.json');
  }

  getChartDataById(id: number): Observable<any> {
    return new Observable(observer => {
      this.getAllChartData().subscribe((dataSet: Array<any>) => {
        if (id >= 0 && Array.isArray(dataSet) && dataSet.length > id) {
          observer.next([dataSet[id]]);
        } else {
          observer.next([]);
        }
      });
    });
  }
}

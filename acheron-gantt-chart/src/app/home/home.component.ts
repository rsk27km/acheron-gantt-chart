import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../chart-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private chartDataService: ChartDataService) { }
  chartDataSet: Array<any>;
  ngOnInit(): void {
    this.chartDataService.getAllChartData().subscribe(respose => {
      this.chartDataSet = respose;
    });
  }

}

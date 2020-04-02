import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartData } from 'gantt';
import { ChartDataService } from '../chart-data.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartDataList: Array<ChartData>;
  id: number;
  constructor(private route: ActivatedRoute, private chartDataService: ChartDataService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.initialize(this.id);
    });
  }
  initialize(id: number): void {
    this.chartDataService.getChartDataById(id).subscribe(response => {
      this.chartDataList = this.buildTreeDataList(response);
    });

  }
  ngOnInit(): void {
    // if (this.id) {
    //   this.initialize(this.id);
    // }
  }
  buildTreeDataList(steps: Array<ChartData>): Array<ChartData> {
    return steps.map((step: ChartData) => {
      step.startDate = step.startDate ? new Date(step.startDate) : new Date();
      step.endDate = step.endDate ? new Date(step.endDate) : new Date();
      if (step.subSteps.length) {
        step.subSteps = this.buildTreeDataList(step.subSteps);
      } else {
        step.subSteps = [];
      }
      return step;
    });
  }
}

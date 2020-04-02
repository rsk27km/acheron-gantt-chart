import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartData } from './interface-models/chart-data';

@Component({
  selector: 'acheron-gantt',
  template: `
    <acheron-chart-home [chartDataList]="copyChartDataList" (click)="onGanttChartChangeEvent(copyChartDataList)"></acheron-chart-home>
  `,
  styles: [
  ],
})
export class GanttComponent implements OnInit {

  @Input() chartDataList: Array<ChartData>;
  @Output() ganttChartChange = new EventEmitter<object>();

  public copyChartDataList: Array<ChartData>;

  constructor() { }

  ngOnInit(): void {
    this.copyChartDataList = (this.chartDataList && Array.isArray(this.chartDataList) && this.chartDataList.length > 0) ?
      this.chartDataList : [];
  }
  onGanttChartChangeEvent(dataList: Array<ChartData>) {
    this.ganttChartChange.emit(dataList);
  }
}

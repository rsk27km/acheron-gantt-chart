import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartData } from '../../interface-objects/chart-data';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'acheron-chart-home',
  templateUrl: './chart-home.component.html',
  styleUrls: ['./chart-home.component.scss']
})
export class ChartHomeComponent implements OnInit {
  @Input() chartDataList: Array<ChartData>;
  @Output() ganttChartChange = new EventEmitter<object>();
  constructor() { }
  treeControl = new NestedTreeControl<ChartData>(node => node.subSteps);
  dataSource = new MatTreeNestedDataSource<ChartData>();

  ngOnInit(): void {
    console.log(this.chartDataList);
    this.dataSource.data = this.chartDataList;
  }

  hasChild = (_: number, node: ChartData) => !!node.subSteps && node.subSteps.length > 0;

}

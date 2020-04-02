import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartData } from '../../interface-models/chart-data';
import { FlatChartData } from '../../class-models/flat-chart-data';

import { ResizeEvent } from 'angular-resizable-element';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of } from 'rxjs';

import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

@Component({
  selector: 'acheron-chart-home',
  templateUrl: './chart-home.component.html',
  styleUrls: ['./chart-home.component.scss']
})
export class ChartHomeComponent implements OnInit {
  @Input() chartDataList: Array<ChartData>;
  @Output() ganttChartChange = new EventEmitter<object>();
  momentPtr = moment;
  constructor() { }

  flatNodeMap: Map<FlatChartData, ChartData> = new Map<FlatChartData, ChartData>();
  nestedNodeMap: Map<ChartData, FlatChartData> = new Map<ChartData, FlatChartData>();

  treeControl: FlatTreeControl<FlatChartData>;
  treeFlattener: MatTreeFlattener<ChartData, FlatChartData>;
  dataSource: MatTreeFlatDataSource<ChartData, FlatChartData>;

  sidebarStyle = {};
  dates = [];
  today = this.momentPtr().format('YYYY-MM-DD');
  ngOnInit(): void {
    console.log(this.chartDataList);
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FlatChartData>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.dataSource.data = this.buildTreeDataList(this.chartDataList, 0);
    this.buildCalendar(this.chartDataList[0]);
    this.treeControl.dataNodes.forEach(node => {
      if (node.expanded) {
        this.treeControl.expand(node);
      } else {
        this.treeControl.collapse(node);
      }
    });
  }
  buildTreeDataList(steps: Array<ChartData>, level: number): Array<ChartData> {
    return steps.map((step: ChartData) => {
      if (step.subSteps.length) {
        step.subSteps = this.buildTreeDataList(step.subSteps, level + 1);
      } else {
        step.subSteps = [];
      }
      return step;
    });
  }
  transformer = (node: ChartData, level: number) => {
    const flatNode = new FlatChartData(node.id, node.title, node.progress, node.startDate, node.endDate,
      node.resourceName, node.status, node.dependency, node.dueDate, node.isEditable, !!node.subSteps.length, level, true);
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  private getLevel = (node: FlatChartData) => node.level;

  private isExpandable = (node: FlatChartData) => node.expandable;

  private getChildren = (node: ChartData): Observable<ChartData[]> => of(node.subSteps);

  hasChild = (_: number, nodeData: FlatChartData) => nodeData.expandable;

  updateStepName(node: FlatChartData, name: string) {
    console.log(node);
  }

  addChildStep(node: FlatChartData) {
    console.log(node);
  }

  deleteStep(node: FlatChartData) {
    console.log(node);
  }
  toggleExpanded(node: FlatChartData) {
    console.log(node);
  }
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 200;
    if (
      event.rectangle.width &&
      (event.rectangle.width < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.sidebarStyle = {
      width: `${event.rectangle.width}px`
    };
  }

  getParentStep(node: FlatChartData) {
    const { treeControl } = this;
    const currentLevel = treeControl.getLevel(node);
    // if root, ignore
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = treeControl.dataNodes.indexOf(node) - 1;
    // loop back to find the nearest upper node
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i];
      if (treeControl.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
  }
  updateDateRange(node: FlatChartData) {
    const nestedNode = this.flatNodeMap.get(node);
    console.log(nestedNode);
  }
  buildCalendar(step: ChartData) {

    const start = this.momentPtr(step.startDate);
    const end = this.momentPtr(step.endDate);
    const range = this.momentPtr.range(start, end);

    const days = Array.from(range.by('days'));
    this.dates = days.map(d => d.format('MMM DD'));
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acheron-gantt-chart';
  chartDataList = [{
    id: '123',
    title: 'Project',
    progress: 60,
    startDate: new Date('03/04/2020'),
    endDate: new Date('03/10/2020'),
    resourceName: 'string',
    status: 'string',
    isParent: true,
    dependencies: [],
    subSteps: [{
      id: '1231',
      title: 'Task-1',
      progress: 30,
      startDate: new Date(),
      endDate: new Date(),
      resourceName: 'string',
      status: 'string',
      isParent: false,
      dependencies: [],
      subSteps: [],
      dueDate: new Date(),
      notes: 'string',
      isEditable: false,
    }, {
      id: '1232',
      title: 'Task-2',
      progress: 90,
      startDate: new Date(),
      endDate: new Date(),
      resourceName: 'string',
      status: 'string',
      isParent: false,
      dependencies: [],
      subSteps: [{
        id: '12321',
        title: 'Deliverable-1',
        progress: 80,
        startDate: new Date(),
        endDate: new Date(),
        resourceName: 'string',
        status: 'string',
        isParent: false,
        dependencies: [],
        subSteps: [],
        dueDate: new Date(),
        notes: 'string',
        isEditable: false,
      }],
      dueDate: new Date(),
      notes: 'string',
      isEditable: false,
    }],
    dueDate: new Date(),
    notes: 'string',
    isEditable: false,
  }];
}

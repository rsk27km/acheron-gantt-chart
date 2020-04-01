import { NgModule } from '@angular/core';
import { GanttComponent } from './gantt.component';

import { GanttChartModule } from './gantt-chart/gantt-chart.module';

@NgModule({
  declarations: [GanttComponent],
  imports: [
    GanttChartModule
  ],
  exports: [GanttComponent]
})
export class GanttModule { }

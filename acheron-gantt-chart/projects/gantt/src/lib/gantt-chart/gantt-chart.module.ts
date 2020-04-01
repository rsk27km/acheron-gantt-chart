import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHomeComponent } from './chart-home/chart-home.component';
import { MaterialDesignModule } from '../material-design.module';


@NgModule({
  declarations: [ChartHomeComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [ChartHomeComponent]
})
export class GanttChartModule { }

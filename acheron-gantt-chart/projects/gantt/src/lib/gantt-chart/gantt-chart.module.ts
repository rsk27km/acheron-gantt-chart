import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHomeComponent } from './chart-home/chart-home.component';
import { MaterialDesignModule } from '../material-design.module';
import { ResizableModule } from 'angular-resizable-element';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [ChartHomeComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ResizableModule,
    FlexLayoutModule
  ],
  exports: [ChartHomeComponent]
})
export class GanttChartModule { }

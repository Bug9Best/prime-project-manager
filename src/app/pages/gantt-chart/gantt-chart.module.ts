import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttChartComponent } from './gantt-chart.component';
import { RouterModule, Routes } from '@angular/router';
import { GanttPrintService, NgxGanttModule } from '@worktile/gantt';
import { TranslateModule } from '@ngx-translate/core';
import { GanttConfigProvider } from '../../config/gantt.config';
import { ThyButtonModule } from 'ngx-tethys/button';

const routes: Routes = [
  {
    path: '',
    component: GanttChartComponent
  }
]

@NgModule({
  declarations: [
    GanttChartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TranslateModule,
    NgxGanttModule,
    ThyButtonModule
  ],
  providers: [GanttPrintService, GanttConfigProvider]
})
export class GanttChartModule { }

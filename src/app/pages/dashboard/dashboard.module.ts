import { Inject, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { AssignMeComponent } from '../../shared/components/assign-me/assign-me.component';
import { TranslateModule } from '@ngx-translate/core';
import { TotalIssueComponent } from '../../shared/components/total-issue/total-issue.component';
import { TotalProjectComponent } from '../../shared/components/total-project/total-project.component';
import { RecentProjectComponent } from '../../modules/recent-project/recent-project.component';
import { DividerModule } from 'primeng/divider';
import { NgxGanttModule } from '@worktile/gantt';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    GridsterComponent, 
    GridsterItemComponent
  ]
})
export class DashboardModule { }

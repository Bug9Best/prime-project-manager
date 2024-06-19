import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { AssignMeComponent } from '../../shared/components/assign-me/assign-me.component';
import { TranslateModule } from '@ngx-translate/core';
import { TotalIssueComponent } from '../../shared/components/total-issue/total-issue.component';
import { TotalProjectComponent } from '../../shared/components/total-project/total-project.component';
import { RecentProjectComponent } from '../../shared/components/recent-project/recent-project.component';

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
    AssignMeComponent,
    TranslateModule,
    TotalIssueComponent,
    TotalProjectComponent,
    RecentProjectComponent
  ]
})
export class DashboardModule { }

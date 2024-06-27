import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent
  }
]

@NgModule({
  declarations: [
    ProjectDashboardComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class ProjectDashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { AssignMeComponent } from '../../shared/components/assign-me/assign-me.component';

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
    AssignMeComponent
  ]
})
export class DashboardModule { }

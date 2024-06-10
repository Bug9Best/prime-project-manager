import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintComponent } from './sprint.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ButtonModule } from 'primeng/button';




const routes: Routes = [
  {
    path: '',
    component: SprintComponent
  }
]


@NgModule({
  declarations: [
    SprintComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    ButtonModule
  ]
  
})
export class SprintModule { }

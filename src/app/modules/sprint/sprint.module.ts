import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintComponent } from './sprint.component';
import { RouterModule, Routes } from '@angular/router';

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
    CommonModule
  ]
})
export class SprintModule { }

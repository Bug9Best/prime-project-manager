import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent
  }
]

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TimelineModule { }

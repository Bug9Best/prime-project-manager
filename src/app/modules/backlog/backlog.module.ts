import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog.component';

const routes: Routes = [
  {
    path: '',
    component: BacklogComponent
  }
]

@NgModule({
  declarations: [
    BacklogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BacklogModule { }

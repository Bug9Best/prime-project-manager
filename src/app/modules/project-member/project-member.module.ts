import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMemberComponent } from './project-member.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';

const routes: Routes = [
  {
    path: '',
    component: ProjectMemberComponent
  }
]

@NgModule({
  declarations: [
    ProjectMemberComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProjectMemberModule { }

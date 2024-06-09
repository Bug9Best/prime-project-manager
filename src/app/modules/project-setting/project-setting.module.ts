import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSettingComponent } from './project-setting.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectSettingComponent
  }
]

@NgModule({
  declarations: [
    ProjectSettingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProjectSettingModule { }

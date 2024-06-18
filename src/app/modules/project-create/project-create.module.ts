import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateComponent } from './project-create.component';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';






const routes: Routes = [
  {
    path: '',
    component: ProjectCreateComponent
  }
]

@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DividerModule,
    InputTextModule,
    ButtonModule
  ]
})
export class ProjectCreateModule { }

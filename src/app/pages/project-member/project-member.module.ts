import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMemberComponent } from './project-member.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TranslateModule } from '@ngx-translate/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';



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
    CommonModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    TranslateModule,
    SplitButtonModule,
    DropdownModule,
    TableModule
  ]
})
export class ProjectMemberModule { }

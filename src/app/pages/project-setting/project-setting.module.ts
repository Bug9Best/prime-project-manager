import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSettingComponent } from './project-setting.component';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

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
    CommonModule,
    TranslateModule,
    DividerModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    DialogModule
  ]
})
export class ProjectSettingModule { }

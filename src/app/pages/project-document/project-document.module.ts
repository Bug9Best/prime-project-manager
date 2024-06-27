import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDocumentComponent } from './project-document.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectDocumentComponent,
  },
];

@NgModule({
  declarations: [
    ProjectDocumentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    TranslateModule,
  ]
})
export class ProjectDocumentModule { }

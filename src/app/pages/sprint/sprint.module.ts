import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintComponent } from './sprint.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




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
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrimeNGModule,
    ButtonModule,
    CheckboxModule,
    TranslateModule,
    DividerModule,
    TableModule
  ]
  
})
export class SprintModule { }

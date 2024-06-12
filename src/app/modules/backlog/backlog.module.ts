import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ButtonModule } from 'primeng/button';

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
    CommonModule,
    PrimeNGModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class BacklogModule { }

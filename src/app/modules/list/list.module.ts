import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
]

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    InputTextModule,
    TranslateModule
  ]
})
export class ListModule { }

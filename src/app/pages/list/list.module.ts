import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { Divider, DividerModule } from 'primeng/divider';
import { TreeTableModule } from 'primeng/treetable';
import { DropdownModule } from 'primeng/dropdown';


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
    DropdownModule,
    DividerModule,
    TranslateModule,
    TreeTableModule
  ]
})
export class ListModule { }

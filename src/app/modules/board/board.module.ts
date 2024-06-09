import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
]

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BoardModule { }

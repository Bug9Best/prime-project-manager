import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { BoardControlComponent } from './board-control/board-control.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
]

@NgModule({
  declarations: [
    BoardComponent,
    BoardControlComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    TranslateModule

  ]
})
export class BoardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../shared/primeng.module';
import { WorkBreakDownComponent } from './work-break-down.component';
import { TranslateModule } from '@ngx-translate/core';
import { WorkBreakDownControlComponent } from './work-break-down-control/work-break-down-control.component';

const routes: Routes = [
  {
    path: '',
    component: WorkBreakDownComponent
  }
]

@NgModule({
  declarations: [
    WorkBreakDownComponent,
    WorkBreakDownControlComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    TranslateModule
  ]
})
export class WorkBreakDownModule { }

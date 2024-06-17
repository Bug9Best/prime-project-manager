import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../shared/primeng.module';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent
  }
]

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    TranslateModule
  ]
})
export class TimelineModule { }

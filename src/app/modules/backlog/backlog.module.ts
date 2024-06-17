import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ButtonModule } from 'primeng/button';
import { BacklogControlComponent } from './backlog-control/backlog-control.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoItemlistComponent } from '../../shared/components/no-itemlist/no-itemlist.component';
import { BacklogIssueComponent } from './backlog-issue/backlog-issue.component';
import { BacklogSprintComponent } from './backlog-sprint/backlog-sprint.component';
import { BacklogSprintCreateComponent } from './backlog-sprint-create/backlog-sprint-create.component';

const routes: Routes = [
  {
    path: '',
    component: BacklogComponent
  }
]

@NgModule({
  declarations: [
    BacklogComponent,
    BacklogControlComponent,
    BacklogIssueComponent,
    BacklogSprintComponent,
    BacklogSprintCreateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimeNGModule,
    ButtonModule,
    CheckboxModule,
    TranslateModule,
    NoItemlistComponent,
  ]
})
export class BacklogModule { }

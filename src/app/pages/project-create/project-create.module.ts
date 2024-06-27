import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreateComponent } from './project-create.component';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PrimeNGModule } from '../../shared/primeng.module';
import { AppTopbarComponent } from '../app-layout/app-topbar/app-topbar.component';
import { AppFooterComponent } from '../app-layout/app-footer/app-footer.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectCreateComponent,
  },
];

@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DividerModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    PrimeNGModule,
    AppTopbarComponent,
    AppFooterComponent,
  ],
})
export class ProjectCreateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppTopbarComponent } from '../app-layout/app-topbar/app-topbar.component';
import { AppFooterComponent } from '../app-layout/app-footer/app-footer.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent
  }
]

@NgModule({
  declarations: [
    ProjectDashboardComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule.forChild(routes),
    TranslateModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    PrimeNGModule,
    AppTopbarComponent,
    AppFooterComponent
  ]
})
export class ProjectDashboardModule { }

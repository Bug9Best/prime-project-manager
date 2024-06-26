import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { ConfigLanguage } from '../../config/language';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule
  ]
})
export class LandingModule { }

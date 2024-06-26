import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../shared/primeng.module';
import { HomeNavigateComponent } from './home-navigate/home-navigate.component';
import { TranslateModule } from '@ngx-translate/core';
import { SectionGetstartedComponent } from './section-getstarted/section-getstarted.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionDeveloperComponent } from './section-developer/section-developer.component';
import { AppFooterComponent } from '../app-layout/app-footer/app-footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavigateComponent,
    SectionGetstartedComponent,
    SectionFeaturesComponent,
    SectionDeveloperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    AppFooterComponent
  ]
})
export class HomeModule { }

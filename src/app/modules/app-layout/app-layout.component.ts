import { Component, ViewChild } from '@angular/core';
import { PrimeNGModule } from '../../shared/primeng.module';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    AppTopbarComponent,
    AppSidebarComponent,
    AppFooterComponent,
    PrimeNGModule,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  @ViewChild(AppSidebarComponent)
  appSidebarComponent!: AppSidebarComponent;
  onToggleSidebar(state: boolean) {
    this.appSidebarComponent.visible = state;
  }
}

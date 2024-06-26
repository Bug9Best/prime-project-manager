import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ConfigMenu } from '../../../config/menu';
import { TranslateModule } from '@ngx-translate/core';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { DividerModule } from 'primeng/divider';
import { PrimeNGModule } from '../../../shared/primeng.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    TranslateModule,
    AppFooterComponent,
    DividerModule,
    PrimeNGModule
  ],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss'
})
export class AppSidebarComponent {

  visible: boolean = true;
  activeRoute: string = '';
  menu: any[] = ConfigMenu;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

  isActiveRoute(route: string): boolean {
    return this.activeRoute === route;
  }

}

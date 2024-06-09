import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ConfigMenu } from '../../../config/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss'
})
export class AppSidebarComponent {
  activeRoute: string = '';

  sections = {
    favorites: true,
    application: true
  };

  menu: any[] = [];

  ngOnInit() {
    this.menu = ConfigMenu;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

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

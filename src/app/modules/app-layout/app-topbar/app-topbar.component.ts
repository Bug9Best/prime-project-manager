import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TranslateModule } from '@ngx-translate/core';
import { AppLayoutService } from '../app-layout.service';
import { ConfigLanguage } from '../../../config/language';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './app-topbar.component.html',
  styleUrl: './app-topbar.component.scss'
})
export class AppTopbarComponent {

  stateToogleSidebar: boolean = false;
  isLightTheme: boolean = true;
  languageItems: MenuItem[] | undefined = new ConfigLanguage().ConfigLanguage;

  constructor(
    private appLayoutService: AppLayoutService,
  ) {
  }

  set theme(val: string) {
    this.appLayoutService.setActiveTheme(val);
  }

  switchTheme(isLightTheme: boolean) {
    const theme = isLightTheme ? 'lara-dark-blue' : 'lara-light-blue';
    this.isLightTheme = !isLightTheme;
    this.theme = theme;
  }


  onToggleSidebarEvent = output<boolean>();
  toggleSidebar(state: boolean) {
    this.stateToogleSidebar = !state;
    this.onToggleSidebarEvent.emit(state);
  }
}

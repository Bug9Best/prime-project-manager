import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ConfigLanguage } from '../../../config/language';
import { AppLayoutService } from '../../app-layout/app-layout.service';

@Component({
  selector: 'home-navigate',
  templateUrl: './home-navigate.component.html',
  styleUrl: './home-navigate.component.scss'
})
export class HomeNavigateComponent {

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

}

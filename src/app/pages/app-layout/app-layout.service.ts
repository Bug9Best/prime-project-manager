import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface AppConfig {
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppLayoutService {

  activeTheme: string = 'lara-light-blue';
  translateService = inject(TranslateService);

  getActiveTheme() {
    return this.activeTheme;
  }

  setActiveTheme(theme: string) {
    this.activeTheme = theme;
    this.switchTheme();
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  switchTheme() {
    let themeLink = <HTMLLinkElement>document.getElementById('app-theme');
    if (themeLink) {
      themeLink.href = `assets/themes/${this.activeTheme}/theme.css`;
    }
  }
}

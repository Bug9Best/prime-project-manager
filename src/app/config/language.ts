import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core"
import { AppLayoutService } from "../pages/app-layout/app-layout.service";
import { Locale, enUS, th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class ConfigLanguage {
  ConfigLanguage = [
    {
      items: [
        {
          id: 'EN',
          label: 'English',
          command: () => {
            this.switchLanguage('en')
          }
        },
        {
          id: 'TH',
          label: 'ภาษาไทย',
          command: () => {
            this.switchLanguage('th')
          }
        },
      ]
    }
  ]

  translateService = inject(TranslateService);
  appLayoutService = inject(AppLayoutService);

  constructor() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  switchLanguage(language: string) {
    this.appLayoutService.switchLanguage(language);
  }
}

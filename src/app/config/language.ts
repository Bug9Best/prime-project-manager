import { inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core"
import { AppLayoutService } from "../modules/app-layout/app-layout.service";

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

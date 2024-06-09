import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  languageItems: MenuItem[] | undefined;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.languageItems = [
      {
        items: [
          {
            id: 'TH',
            label: 'ภาษาไทย',
            command: () => {
              this.switchLanguage('th');
            }
          },
          {
            id: 'EN',
            label: 'English',
            command: () => {
              this.switchLanguage('en');
            }
          }
        ]
      }
    ];
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}

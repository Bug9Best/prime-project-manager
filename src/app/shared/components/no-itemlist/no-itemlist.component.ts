import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'no-itemlist',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './no-itemlist.component.html',
  styleUrl: './no-itemlist.component.scss'
})
export class NoItemlistComponent {

  title = input<string>('title')
  description = input<string>('description')
}

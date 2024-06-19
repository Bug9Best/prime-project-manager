import { Component } from '@angular/core';
import { PrimeNGModule } from '../../shared/primeng.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    PrimeNGModule

  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}

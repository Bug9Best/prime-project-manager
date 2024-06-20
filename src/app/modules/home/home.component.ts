import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }

  onScrollToElementEvent(element: string) {
    const targetElement = document.getElementById(element);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSigninEvent() {
    console.log('Sign in clicked');
    this.router.navigate(['/project-dashboard']);
  }

}

import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { PrimeNGModule } from '../../../shared/primeng.module';

@Component({
  selector: 'sign-up-dialog',
  standalone: true,
  imports: [CommonModule, PrimeNGModule],
  templateUrl: './sign-up-dialog.component.html',
  styleUrl: './sign-up-dialog.component.scss',
})
export class SignUpDialogComponent {
  visible: boolean = false;

  onSignUpEvent = output();
  onSignUp() {
    this.onSignUpEvent.emit();
  }

  onSignInGoogleEvent = output();
  onSigninGoogle() {
    this.onSignInGoogleEvent.emit();
  }
}

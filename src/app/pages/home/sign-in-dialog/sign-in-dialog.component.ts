import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { PrimeNGModule } from '../../../shared/primeng.module';

@Component({
  selector: 'sign-in-dialog',
  standalone: true,
  imports: [CommonModule, PrimeNGModule],
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.scss',
})
export class SignInDialogComponent {
  visible: boolean = false;

  onSignInEvent = output();
  onSignin() {
    this.onSignInEvent.emit();
  }

  onSignInGoogleEvent = output();
  onSigninGoogle() {
    this.onSignInGoogleEvent.emit();
  }

  onSignUpEvent = output();
  onSignup() {
    this.onSignUpEvent.emit();
  }
}

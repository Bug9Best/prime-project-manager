import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent {

  template: any = -1;

  constructor(
    private router: Router,
  ) { }

  onCancel() {
    this.router.navigate(['/home']);
  }

  onCreateProject() {
    this.router.navigate(['/dashboard']);
  }
}

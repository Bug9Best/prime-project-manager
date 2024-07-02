import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss'
})
export class ProjectDashboardComponent {
  template: any = -1;

  constructor(
    private router: Router,
  ) { }

  onCancel() {
    this.router.navigate(['/home']);
  }

  onSelectProject() {
    this.router.navigate(['/dashboard']);
  }
  onCreateMoreProject() {
    this.router.navigate(['/project-create']);
  }


}


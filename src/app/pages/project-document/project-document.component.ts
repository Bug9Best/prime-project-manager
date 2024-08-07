import { Component } from '@angular/core';

@Component({
  selector: 'app-project-document',
  templateUrl: './project-document.component.html',
  styleUrl: './project-document.component.scss',
})
export class ProjectDocumentComponent {
  isAddResource: boolean = false;

  showDialog() {
    this.isAddResource = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrl: './project-setting.component.scss',
})
export class ProjectSettingComponent {

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}

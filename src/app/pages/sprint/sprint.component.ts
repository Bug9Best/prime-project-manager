import { Component } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrl: './sprint.component.scss',
})
export class SprintComponent {
  checked: boolean = false;

  thisShow: boolean = false;

  sprintItem!: any;

  value: any = [
    {
      id: 1,
      sprint_name: 'First Sprint',
      sprint_owner: 'Natthaphon Ditthaviboon',
      duration: "12/07/2567" + ' - ' + "17/07/2567",
      progress: 50,
    },
   
  ];

  getDateTime() {

  }
  onclick() {
    this.thisShow = !this.thisShow;
  }
}

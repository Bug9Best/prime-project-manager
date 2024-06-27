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
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 1,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 1,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 1,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 1,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
  ];
  onclick() {
    this.thisShow = !this.thisShow;
  }
}

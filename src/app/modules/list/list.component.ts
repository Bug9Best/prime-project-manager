import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  checked: boolean = false;

  value: any = [
    {
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
      duedate: 'daw',
      labels: 'awd',
      created: 'vawf',
      updated: 'daw',
      reporter: 'awd',
    },
    {
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
      duedate: 'daw',
      labels: 'awd',
      created: 'vawf',
      updated: 'daw',
      reporter: 'awd',
    }
  ];
}

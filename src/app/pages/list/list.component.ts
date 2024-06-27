import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  

})
export class ListComponent {
  
  checked: boolean = false;

  selectedProducts!: any;

  

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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
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
      id: 1,
      type: 'value',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
  ];
}

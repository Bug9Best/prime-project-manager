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

  options: any = [
    { label: 'Sprint 1', value: 'Sprint 1' },
    { label: 'Sprint 2', value: 'Sprint 2' },
    { label: 'Sprint 3', value: 'Sprint 3' }
  ]

  optionsAssignee: any = [
    { label: 'Natthaphon Ditthaviboon', value: 'Natthaphon Ditthaviboon' },
  ]

  value: any = [
    {
      id: 1,
      type: 'TASK',
      summary: 'Create a new Project',
      status: 'DONE',
      sprint: '',
      assignee: ''
    },
    {
      id: 2,
      type: 'TASK',
      summary: 'Implement user authentication',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 3,
      type: 'TASK',
      summary: 'Design database schema for messaging module',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 4,
      type: 'BUG',
      summary: 'Fix issue with image upload failing on Safari',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 5,
      type: 'TASK',
      summary: 'Create API endpoint for user profile updates',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 6,
      type: 'TASK',
      summary: 'Refactor frontend components for improved performance',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 7,
      type: 'BUG',
      summary: 'Resolve issue with email notifications not being sent',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 8,
      type: 'TASK',
      summary: 'Integrate payment gateway for subscription services',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 9,
      type: 'TASK',
      summary: 'Implement search functionality using Elasticsearch',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 10,
      type: 'BUG',
      summary: 'Fix issue with login session expiring prematurely',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 11,
      type: 'TASK',
      summary: 'Create automated tests for checkout process',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 12,
      type: 'TASK',
      summary: 'Implement responsive design for mobile devices',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 13,
      type: 'BUG',
      summary: 'Fix issue with overlapping text in product descriptions',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 14,
      type: 'TASK',
      summary: 'Optimize backend queries for faster data retrieval',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 15,
      type: 'TASK',
      summary: 'Implement user role management functionality',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 16,
      type: 'BUG',
      summary: 'Resolve issue with 404 errors on certain pages',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 17,
      type: 'TASK',
      summary: 'Implement batch processing for large data imports',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 18,
      type: 'TASK',
      summary: 'Create documentation for API endpoints',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 19,
      type: 'BUG',
      summary: 'Fix issue with pagination not displaying correctly',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 20,
      type: 'TASK',
      summary: 'Implement password strength validation',
      status: 'TODO',
      sprint: '',
      assignee: ''
    },
    {
      id: 21,
      type: 'TASK',
      summary: 'Refactor CSS styles for better maintainability',
      status: 'TODO',
      sprint: '',
      assignee: ''
    }
  ];
}

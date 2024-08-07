import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'total-issue',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './total-issue.component.html',
  styleUrl: './total-issue.component.scss'
})
export class TotalIssueComponent {
  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'Test',
      roles: "Test ",
    },
    {
      id: 2,
      name: 'Test2',
      roles: "Test2",
    },
  ];
}

import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'total-project',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './total-project.component.html',
  styleUrl: './total-project.component.scss'
})
export class TotalProjectComponent {
  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'PM-project',
      roles: "Phuri siripool",
    },
    {
      id: 2,
      name: 'PM2-project',
      roles: "Natthaphon Ditthaviboon",
    },
    {
      id: 3,
      name: 'PM3-project',
      roles: "Natthaphon Phuri",
    },
    {
      id: 4,
      name: 'PM4-project',
      roles: "Natthaphon Phuri",
    },
    {
      id: 5,
      name: 'PM5-project',
      roles: "Natthaphon Phuri",
    },
  ];
}

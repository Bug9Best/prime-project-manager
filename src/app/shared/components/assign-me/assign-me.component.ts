import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'assign-me',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './assign-me.component.html',
  styleUrl: './assign-me.component.scss'
})
export class AssignMeComponent {

  assignMe() {}
  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'Do some work',
      roles: "Phuri siripool",
    },
    {
      id: 2,
      name: 'Do u',
      roles: "Natthaphon Ditthaviboon",
    },
  ];
}

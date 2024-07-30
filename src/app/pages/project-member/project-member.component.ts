import { Component } from '@angular/core';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html',
  styleUrl: './project-member.component.scss',
})
export class ProjectMemberComponent {

  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'Phuri siripool',
      email: 'Phuriq.com',
      roles: "Admin",
    },
    {
      id: 2,
      name: 'Natthaphon Ditthaviboon',
      email: 'natbestgmail.com',
      roles: "Member",
    },
  ];
}

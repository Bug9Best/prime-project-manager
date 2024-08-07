import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html',
  styleUrl: './project-member.component.scss',
})
export class ProjectMemberComponent {

  isAddMember: boolean = false;

  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'Phuri siripool',
      email: 'Phuriq.com',
      position: "-",
    },
    {
      id: 2,
      name: 'Natthaphon Ditthaviboon',
      email: 'natbestgmail.com',
      position: "-",
    },
  ];

  constructor(
    private messageService: MessageService,
    private ConfirmationService: ConfirmationService,
  ) { }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  removeMember(member_id: string | number) {
    this.ConfirmationService.confirm({
      message: 'Do you want to remove this member?',
      header: 'Remove Member',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.value = this.value.filter((val: any) => val.id !== member_id);
        this.showMessage('success', 'Removed', 'Member has been removed');
      },
      reject: () => {
        this.showMessage('warn', 'Rejected', 'You have rejected');
      }
    });
  }
}

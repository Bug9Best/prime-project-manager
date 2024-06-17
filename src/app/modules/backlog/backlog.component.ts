import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { StateService } from '../../shared/service/state.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss',
})
export class BacklogComponent {

  isCreateIssue: boolean = false;
  issueName: string = '';
  listSprint: any[] = []
  listIssue: any[] = []

  @ViewChild('inputIssue') inputIssue: ElementRef | undefined;
  @ViewChild('buttonIssue') buttonIssue: ElementRef | undefined;

  constructor(
    private stateService: StateService,
    private renderer: Renderer2
  ) {
    this.stateService.stateReload$
      .subscribe((res) => {
        this.getSprints();
        this.getIssues();
      });

    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.buttonIssue?.nativeElement.contains(e.target)) {
        this.isCreateIssue = true;
        return;
      }

      if (e.target !== this.inputIssue?.nativeElement) {
        this.handleOutsideClick();
      }
    });
  }

  ngOnInit() {
    this.getSprints();
    this.getIssues();
  }

  getSprints() {
    this.listSprint = JSON.parse(localStorage.getItem('sprints') || '[]');
  }

  getIssues() {
    this.listIssue = JSON.parse(localStorage.getItem('issues') || '[]');
  }

  onCreateIssue() {
    this.isCreateIssue = true;
    setTimeout(() => {
      this.inputIssue?.nativeElement.focus();
    }, 0);
  }

  handleOutsideClick() {
    if (this.issueName.trim() === "") {
      this.isCreateIssue = false;
    } else {
      this.createIssue();
    }
  }

  createIssue() {
    this.listIssue.push({ issue_name: this.issueName });
    localStorage.setItem('issues', JSON.stringify(this.listIssue));
    this.issueName = '';
    this.isCreateIssue = false;
  }
}

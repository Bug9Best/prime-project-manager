import { Component } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrl: './backlog.component.scss',
})
export class BacklogComponent {
  checked:boolean = false;

  thisShow: boolean = false;

  onclick() {
    this.thisShow = !this.thisShow;
  }
}

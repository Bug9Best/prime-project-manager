import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';
import { Observable, Subject } from 'rxjs';
import { Card2uTemplateDirective } from '../../directive/card2u-template.directive';

@Component({
  selector: 'phantom-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ],
  templateUrl: './phantom-dialog.component.html',
  styleUrl: './phantom-dialog.component.scss'
})
export class PhantomDialogComponent {

  @Input()
  header?: string;

  @Input()
  subHeader?: string;

  @Input()
  label: string = "BUTTON";

  @Input()
  icon: string = "";

  @Input()
  styleClass: string = "p-button-success";

  @Input()
  contentStyleClass: string = "p-0";

  @Input()
  headerStyleClass: string = "p-3";

  @Input()
  footerStyleClass: string = "flex align-items-center justify-content-end";

  @Input()
  buttonStyle: any = {};

  @Input()
  style: any = { minWidth: '100px', minHeight: '100px' };

  @Input()
  width: string = "auto";

  @Input()
  height: string = "auto";

  @Input()
  data: any;

  @Input()
  draggable: boolean = false;

  @Input()
  dismissableMask: boolean = true;

  @Input()
  modal: boolean = true;

  @Input()
  appendTo: string = 'body';

  @Input()
  showHeader: boolean = true;

  @Input()
  showSubHeader: boolean = true;

  @Input()
  showEdit: boolean = false;

  @Input()
  showTrash: boolean = false;

  @Input()
  showClose: boolean = true;

  @Input()
  showBack: boolean = false;

  @Input()
  showButton: boolean = true;

  @Input()
  visible: boolean = false;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onCloseClick: EventEmitter<void> = new EventEmitter();

  @Output()
  onEditClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onTrashClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onBackClick: EventEmitter<any> = new EventEmitter();

  @ViewChild(Dialog)
  dialog!: Dialog;

  constructor() {

  }

  onShow(): void {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  onClose(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.onCloseClick.emit();
  }

  show(): void {
    this.onShow();
  }

  close() {
    return new Observable<boolean>(observer => {
      this.dialog.onHide.subscribe(() => {
        observer.next(true);
        observer.complete();
      });
      this.visible = false;
      this.visibleChange.emit(this.visible);
    });
  }
}

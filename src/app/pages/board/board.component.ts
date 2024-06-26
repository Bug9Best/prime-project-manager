import { Component } from '@angular/core';
import { MockBoard, KanbanBoard, KanbanBoardItem } from '../../shared/data/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  private mockBoard = new MockBoard();

  listBoard: KanbanBoard[] = this.mockBoard.board;
  sourceBoard: KanbanBoard | undefined;
  draggedItem: KanbanBoardItem | undefined;

  resetValues() {
    this.draggedItem = undefined;
    this.sourceBoard = undefined;
  }

  onDragStart(column: KanbanBoard, item: KanbanBoardItem,) {
    this.sourceBoard = column;
    this.draggedItem = item;
  }

  onDragEnd() {
    this.resetValues();
  }

  onDropItem(targetColumn: KanbanBoard) {
    if (this.draggedItem && this.sourceBoard) {
      const index = this.sourceBoard.items.indexOf(this.draggedItem);
      if (index !== -1) {
        this.sourceBoard.items.splice(index, 1);
      }
      targetColumn.items.push(this.draggedItem);
      this.resetValues();

      this.mockBoard.saveBoard();
    }
  }
}

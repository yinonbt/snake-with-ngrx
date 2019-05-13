import { Component } from '@angular/core';
import { Cell } from './interfaces/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snake-with-ngrx';
  cellsMatrix: Cell[][] = [];
  matrixSize = 30;

  constructor() {
    for (let i = 0; i < this.matrixSize; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        const cell: Cell = { row: i, column: j };
        row.push(cell);
      }
      this.cellsMatrix.push(row);
    }
  }
}

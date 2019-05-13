import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';

@Component({
  selector: 'app-cells-matrix',
  templateUrl: './cells-matrix.component.html',
  styleUrls: ['./cells-matrix.component.scss']
})
export class CellsMatrixComponent implements OnInit {
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
  ngOnInit() {
  }

}

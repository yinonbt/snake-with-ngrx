import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store-entities/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cells-matrix',
  templateUrl: './cells-matrix.component.html',
  styleUrls: ['./cells-matrix.component.scss']
})
export class CellsMatrixComponent implements OnInit {
  cellsMatrix: Cell[][] = [];
  matrixSize$: Observable<number>;
  matrixSize = 30;

  constructor(private store: Store<fromReducers.State>) {
    this.matrixSize$ = store.select(fromReducers.selectors.getmatrixSize);
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

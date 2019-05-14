import { MatrixGeneratedAction } from './../../store-entities/actions/matrix-generated-action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store-entities/reducers';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cells-matrix',
  templateUrl: './cells-matrix.component.html',
  styleUrls: ['./cells-matrix.component.scss']
})
export class CellsMatrixComponent implements OnInit, OnDestroy {
  subscriptionMatrixSize: Subscription;
  cellsMatrix$: Observable<Cell[][]>;
  matrixSize$: Observable<number>;

  constructor(private store: Store<fromReducers.State>) {
    this.matrixSize$ = store.select(fromReducers.selectors.getMatrixSize);
    this.cellsMatrix$ = store.select(fromReducers.selectors.getCellsMatrix);

    this.subscriptionMatrixSize = this.matrixSize$.subscribe(matrixSize => {
      console.log('matrix size retrieved from store: ', matrixSize);
      this.dispatchMatrixGenerated(matrixSize);
    });
  }

  private dispatchMatrixGenerated(matrixSize: number) {
    const cellsMatrix: Cell[][] = [];
    for (let i = 0; i < matrixSize; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < matrixSize; j++) {
        const cell: Cell = { row: i, column: j };
        row.push(cell);
      }
      cellsMatrix.push(row);
    }
    this.store.dispatch(new MatrixGeneratedAction(cellsMatrix));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.subscriptionMatrixSize) {
      this.subscriptionMatrixSize.unsubscribe();
    }
  }
}

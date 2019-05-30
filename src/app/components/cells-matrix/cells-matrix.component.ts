
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CellType } from 'src/app/enums/cell-type.enum';
import { State } from 'src/app/snake/snake.reducer';
import { getMatrixSize } from 'src/app/reducers';

@Component({
  selector: 'app-cells-matrix',
  templateUrl: './cells-matrix.component.html',
  styleUrls: ['./cells-matrix.component.scss']
})
export class CellsMatrixComponent implements OnInit, OnDestroy {
  subscriptionMatrixSize: Subscription;
  cellsMatrix$: Observable<Cell[][]>;
  matrixSize$: Observable<number>;

  constructor(private store: Store<State>) {}
  // constructor(private store: Store<fromReducers.State_>) {
  //   this.matrixSize$ = store.select(fromReducers.selectors.getMatrixSize);
  //   this.cellsMatrix$ = store.select(fromReducers.selectors.getCellsMatrix);

  //   this.subscriptionMatrixSize = this.matrixSize$.subscribe(matrixSize => {
  //     console.log('matrix size retrieved from store: ', matrixSize);
  //     this.dispatchMatrixGenerated(matrixSize);
  //   });
  // }

  private dispatchMatrixGenerated(matrixSize: number) {
    const cellsMatrix: Cell[][] = [];
    for (let i = 0; i < matrixSize; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < matrixSize; j++) {
        const cell: Cell = { row: i, column: j, cellType: CellType.Empty };
        row.push(cell);
      }
      cellsMatrix.push(row);
    }
    // const center = Math.floor(matrixSize / 2);
    // cellsMatrix[center][center].cellType = CellType.SnakeNode;
    // this.store.dispatch(new MatrixGeneratedAction(cellsMatrix));
  }

  ngOnInit() {
    this.matrixSize$ = this.store.select(getMatrixSize);
  }

  ngOnDestroy(): void {
    if (this.subscriptionMatrixSize) {
      this.subscriptionMatrixSize.unsubscribe();
    }
  }
}

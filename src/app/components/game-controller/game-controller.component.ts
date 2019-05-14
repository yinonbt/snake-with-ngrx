import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Cell } from 'src/app/interfaces/cell';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store-entities/reducers';
import { MatrixGeneratedAction } from 'src/app/store-entities/actions/matrix-generated-action';
import { CellType } from 'src/app/enums/cell-type.enum';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit, OnDestroy {
  subscriptionMatrixSize: Subscription;
  subscriptionCellsMatrix: Subscription;

  cellsMatrix$: Observable<Cell[][]>;
  matrixSize$: Observable<number>;

  cellsMatrix: Cell[][];
  matrixSize: number;

  constructor(private store: Store<fromReducers.State>) {
    this.matrixSize$ = store.select(fromReducers.selectors.getMatrixSize);
    this.cellsMatrix$ = store.select(fromReducers.selectors.getCellsMatrix);

    this.subscriptionMatrixSize = this.matrixSize$.subscribe(matrixSize => {
      this.matrixSize = matrixSize;
    });

    this.subscriptionCellsMatrix = this.cellsMatrix$.subscribe(cellsMatrix => {
      this.cellsMatrix = cellsMatrix;
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.subscriptionMatrixSize) {
      this.subscriptionMatrixSize.unsubscribe();
    }

    if (this.subscriptionCellsMatrix) {
      this.subscriptionCellsMatrix.unsubscribe();
    }
  }

  displaySnake() {
    if (
      this.matrixSize != null &&
      this.cellsMatrix != null &&
      this.cellsMatrix.length === this.matrixSize
    ) {
      const center = Math.floor(this.matrixSize / 2);
      this.cellsMatrix[center][center].cellType = CellType.SnakeNode;
      this.store.dispatch(new MatrixGeneratedAction(this.cellsMatrix));
    }
  }
}

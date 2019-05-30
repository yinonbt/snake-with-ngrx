import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Cell } from 'src/app/interfaces/cell';
import { Store } from '@ngrx/store';
import { CellType } from 'src/app/enums/cell-type.enum';
import { GameStatus } from 'src/app/enums/game-status.enum';
import { takeUntil } from 'rxjs-compat/operator/takeUntil';
import { SnakeDirection } from 'src/app/enums/snake-direction.enum';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.scss']
})
export class GameControllerComponent implements OnInit, OnDestroy {
  gameStatuses = GameStatus;

  destroy$: Subject<boolean> = new Subject<boolean>();

  cellsMatrix$: Observable<Cell[][]>;
  matrixSize$: Observable<number>;
  gameStatus$: Observable<GameStatus>;
  snakeDirection$: Observable<SnakeDirection>;

  cellsMatrix: Cell[][];
  matrixSize: number;
  gameStatus: GameStatus;
  snakeDirection: SnakeDirection;

  // constructor(private store: Store<fromReducers.State_>) {
  //   this.matrixSize$ = store.select(fromReducers.selectors.getMatrixSize);
  //   this.cellsMatrix$ = store.select(fromReducers.selectors.getCellsMatrix);
  //   this.gameStatus$ = store.select(fromReducers.selectors.getGameStatus);
  //   this.snakeDirection$ = store.select(fromReducers.selectors.getSnakeDirection);
  // }

  ngOnInit() {
    this.matrixSize$.takeUntil(this.destroy$).subscribe(matrixSize => {
      this.matrixSize = matrixSize;
    });

    this.cellsMatrix$.takeUntil(this.destroy$).subscribe(cellsMatrix => {
      this.cellsMatrix = cellsMatrix;
    });

    this.gameStatus$.takeUntil(this.destroy$).subscribe(gameStatus => {
      this.gameStatus = gameStatus;
    });

    this.snakeDirection$.takeUntil(this.destroy$).subscribe(snakeDirection => {
      this.snakeDirection = snakeDirection;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);

    this.destroy$.unsubscribe();
  }

  displaySnake() {
    if (
      this.matrixSize != null &&
      this.cellsMatrix != null &&
      this.cellsMatrix.length === this.matrixSize
    ) {
      const center = Math.floor(this.matrixSize / 2);
      this.cellsMatrix[center][center].cellType = CellType.SnakeNode;
      // this.store.dispatch(new MatrixGeneratedAction(this.cellsMatrix));
    }
  }

  togglePlaying() {
    let targetGameStatus = GameStatus.Running;
    if (this.gameStatus === GameStatus.Running) {
      targetGameStatus = GameStatus.Paused;
    }
    // this.store.dispatch(new GameStatusAction(targetGameStatus));
  }

  playStep() {}
}

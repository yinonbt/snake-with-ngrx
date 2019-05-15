import { GameStatus } from './../../enums/game-status.enum';
import * as fromMatrixSize from './matrix-size';
import * as fromMatrixGenerated from './matrix-generated';
import * as fromGameStatus from './game-status';
import * as fromSelectors from '../selectors/selectors';
import { Cell } from 'src/app/interfaces/cell';

export const reducers = {
  matrixSize: fromMatrixSize.reducer,
  cellsMatrix: fromMatrixGenerated.reducer,
  gameStatus: fromGameStatus.reducer
};

export interface State {
  matrixSize: number;
  cellsMatrix: Cell[][];
  gameStatus: GameStatus;
}

export const selectors = {
  getMatrixSize: fromSelectors.getMatrixSize,
  getCellsMatrix: fromSelectors.getCellsMatrix,
  getGameStatus: fromSelectors.getGameStatus
};

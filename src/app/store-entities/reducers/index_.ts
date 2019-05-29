import { GameStatus } from '../../enums/game-status.enum';
import * as fromMatrixSize from './matrix-size';
import * as fromMatrixGenerated from './matrix-generated';
import * as fromGameStatus from './game-status';
import * as fromSnakeDirection from './snake-direction';
import * as fromSelectors from '../selectors/selectors';
import { Cell } from 'src/app/interfaces/cell';
import { SnakeDirection } from 'src/app/enums/snake-direction.enum';

// export const reducers = {
//   matrixSize: fromMatrixSize.reducer,
//   cellsMatrix: fromMatrixGenerated.reducer,
//   gameStatus: fromGameStatus.reducer,
//   snakeDirection: fromSnakeDirection.reducer
// };

export interface State_ {
  matrixSize: number;
  cellsMatrix: Cell[][];
  gameStatus: GameStatus;
  snakeDirection: SnakeDirection;
}

export const selectors = {
  getMatrixSize: fromSelectors.getMatrixSize,
  getCellsMatrix: fromSelectors.getCellsMatrix,
  getGameStatus: fromSelectors.getGameStatus,
  getSnakeDirection: fromSelectors.getSnakeDirection
};

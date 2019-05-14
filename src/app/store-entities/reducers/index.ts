import * as fromMatrixSize from './matrix-size';
import * as fromMatrixGenerated from './matrix-generated';
import * as fromSelectors from '../selectors/selectors';
import { Cell } from 'src/app/interfaces/cell';

export const reducers = {
  matrixSize: fromMatrixSize.reducer,
  cellsMatrix: fromMatrixGenerated.reducer
};

export interface State {
  matrixSize: number;
  cellsMatrix: Cell[][];
}

export const selectors = {
  getMatrixSize: fromSelectors.getMatrixSize,
  getCellsMatrix: fromSelectors.getCellsMatrix
};

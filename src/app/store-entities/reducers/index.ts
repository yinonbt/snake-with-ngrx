import * as fromMatrixSize from './matrix-size';
import * as fromSelectors from '../selectors/selectors';

export const reducers = {
  matrixSize: fromMatrixSize.reducer
};

export interface State {
  matrixSize: number;
}

export const selectors = {
  getmatrixSize: fromSelectors.getMatrixSize
};

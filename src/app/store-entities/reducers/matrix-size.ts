import { MatrixSizeAction } from '../actions/matrix-size-action';
import * as matrixSize from '../actions/matrix-size-action';

export function reducer(state: number = 30, action: MatrixSizeAction) {
  switch (action.type) {
    case matrixSize.MATRIXSIZE:
      return action.payload;
    default:
      return state;
  }
}
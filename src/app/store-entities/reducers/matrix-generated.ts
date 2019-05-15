import * as matrixGenerated from '../actions/matrix-generated-action';
import { Cell } from 'src/app/interfaces/cell';
import { MatrixGeneratedAction } from '../actions/matrix-generated-action';

export function reducer(state: Cell[][] = [], action: MatrixGeneratedAction) {
  switch (action.type) {
    case matrixGenerated.MATRIXGENERATED:
      return action.payload;
    default:
      return state;
  }
}

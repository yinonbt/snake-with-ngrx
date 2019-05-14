import { State } from '../reducers/index';

export const getMatrixSize = (state: State) => {
  return state.matrixSize;
};

export const getCellsMatrix = (state: State) => {
    return state.cellsMatrix;
  };

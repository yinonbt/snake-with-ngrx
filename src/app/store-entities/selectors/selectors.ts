import { State_ } from '../reducers/index_';

export const getMatrixSize = (state: State_) => {
  return state.matrixSize;
};

export const getCellsMatrix = (state: State_) => {
  return state.cellsMatrix;
};

export const getGameStatus = (state: State_) => {
  return state.gameStatus;
};

export const getSnakeDirection = (state: State_) => {
    return state.snakeDirection;
  };

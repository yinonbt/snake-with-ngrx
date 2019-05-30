
import { SnakeActions, SnakeActionTypes } from './snake.actions';

export interface State {
  matrixSize: number;
}

export const initialState: State = {
  matrixSize: 30,
};

export function reducer(state = initialState, action: SnakeActions): State {
  switch (action.type) {

    case SnakeActionTypes.LoadMatrixSize:
      return state;

    default:
      return state;
  }
}

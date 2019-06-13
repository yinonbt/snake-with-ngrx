import { SnakeActions, SnakeActionTypes } from './snake.actions';
import { Cell } from '../interfaces/cell';
import { CellType } from '../enums/cell-type.enum';

export interface State {
  matrixSize: number;
  matrix: Cell[][];
}

export const initialState: State = {
  matrixSize: 30,
  matrix: []
};

export function reducer(state = initialState, action: SnakeActions): State {
  switch (action.type) {
    case SnakeActionTypes.LoadMatrixSize:
      console.log('reducer LoadMatrixSize');
      return state;

    case SnakeActionTypes.GenerateMatrix:
      console.log('reducer GenerateMatrix');
      const newState = { ...state };
      for (let i = 0; i < newState.matrixSize; i++) {
        const row: Cell[] = [];
        for (let j = 0; j < newState.matrixSize; j++) {
          const cell: Cell = { row: i, column: j, cellType: CellType.Empty };
          row.push(cell);
        }
        newState.matrix.push(row);
      }
      return newState;

    default:
      return state;
  }
}

import * as snakeDirection from '../actions/snake-direction-action';
import { SnakeDirection } from 'src/app/enums/snake-direction.enum';
import { SnakeDirectionAction } from '../actions/snake-direction-action';

export function reducer(
  state: SnakeDirection = SnakeDirection.Right,
  action: SnakeDirectionAction
) {
  switch (action.type) {
    case snakeDirection.SNAKEDIRECTION:
      return action.payload;
    default:
      return state;
  }
}

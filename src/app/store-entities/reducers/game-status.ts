import * as gameStatus from '../actions/game-status-action';
import { GameStatus } from 'src/app/enums/game-status.enum';
import { GameStatusAction } from '../actions/game-status-action';

export function reducer(
  state: GameStatus = GameStatus.Stopped,
  action: GameStatusAction
) {
  switch (action.type) {
    case gameStatus.GAMESTATUS:
      return action.payload;
    default:
      return state;
  }
}

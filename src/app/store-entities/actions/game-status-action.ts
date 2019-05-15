import { GameStatus } from './../../enums/game-status.enum';
import { Action } from '@ngrx/store';

export const GAMESTATUS = '[Game] Status';

export class GameStatusAction implements Action {
    type = GAMESTATUS;

    constructor(public payload: GameStatus) {}
}

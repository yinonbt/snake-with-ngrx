import { SnakeDirection } from './../../enums/snake-direction.enum';
import { Action } from '@ngrx/store';

export const SNAKEDIRECTION = '[Snake] Direction';

export class SnakeDirectionAction implements Action {
  type = SNAKEDIRECTION;

  constructor(public payload: SnakeDirection) {}
}

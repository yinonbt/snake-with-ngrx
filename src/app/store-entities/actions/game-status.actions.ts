import { Action } from '@ngrx/store';

export enum GameStatusActionTypes {
  LoadGameStatuss = '[GameStatus] Load GameStatuss',
  
  
}

export class LoadGameStatuss implements Action {
  readonly type = GameStatusActionTypes.LoadGameStatuss;
}


export type GameStatusActions = LoadGameStatuss;

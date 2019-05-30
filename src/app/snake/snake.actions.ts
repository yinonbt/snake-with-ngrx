import { Action } from '@ngrx/store';

export enum SnakeActionTypes {
  LoadMatrixSize = '[Snake] Load Matrix Size',
  
  
}

export class LoadSnakes implements Action {
  readonly type = SnakeActionTypes.LoadMatrixSize;
}


export type SnakeActions = LoadSnakes;

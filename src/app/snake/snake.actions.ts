import { Action } from '@ngrx/store';

export enum SnakeActionTypes {
  LoadMatrixSize = '[Snake] Load Matrix Size',
  GenerateMatrix = '[Snake] Generate Matrix'
}

export class LoadMatrixSize implements Action {
  readonly type = SnakeActionTypes.LoadMatrixSize;
}

export class GenerateMatrix implements Action {
  readonly type = SnakeActionTypes.GenerateMatrix;
}
export type SnakeActions = LoadMatrixSize | GenerateMatrix;

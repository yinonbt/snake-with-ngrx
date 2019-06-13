import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromSnake from '../snake/snake.reducer';

export interface State {
  snake: fromSnake.State;
}

export const reducers: ActionReducerMap<State> = {
  snake: fromSnake.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

export const getSnakeState = createFeatureSelector<fromSnake.State>('snake');
export const getMatrixSize = createSelector(
  getSnakeState,
  state => state.matrixSize
);
export const getMatrix = createSelector(
  getSnakeState,
  state => state.matrix
);

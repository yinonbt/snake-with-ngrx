import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { SnakeActionTypes, SnakeActions } from './snake.actions';


@Injectable()
export class SnakeEffects {


  @Effect()
  loadSnakes$ = this.actions$.pipe(
    ofType(SnakeActionTypes.LoadMatrixSize),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<SnakeActions>) {}

}

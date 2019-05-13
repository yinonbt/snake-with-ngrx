import { Action } from '@ngrx/store';
import { Cell } from 'src/app/interfaces/cell';

export const MATRIXGENERATED = '[Matrix] Generated';

export class MatrixGeneratedAction implements Action {
    type = MATRIXGENERATED;

    constructor(public payload: Cell[][]) {}
}

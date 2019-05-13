import { Action } from '@ngrx/store';

export const MATRIXSIZE = '[Matrix] Size';

export class MatrixSizeAction implements Action {
    type = MATRIXSIZE;

    constructor(public payload: number) {}
}

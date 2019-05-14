import { CellType } from '../enums/cell-type.enum';

export interface Cell {
    row: number;
    column: number;
    cellType: CellType;
}

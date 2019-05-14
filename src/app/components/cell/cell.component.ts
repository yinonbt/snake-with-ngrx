import { Cell } from './../../interfaces/cell';
import { Component, OnInit, Input } from '@angular/core';
import { CellType } from 'src/app/enums/cell-type.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  private cellTypes = CellType;

  constructor() {}

  ngOnInit() {}
}

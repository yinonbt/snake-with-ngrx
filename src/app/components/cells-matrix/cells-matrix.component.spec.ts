import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsMatrixComponent } from './cells-matrix.component';
import { CellComponent } from '../cell/cell.component';
import { Store } from '@ngrx/store';
import { TestStore } from 'src/app/testings/utils/test-store';

describe('CellsMatrixComponent', () => {
  let component: CellsMatrixComponent;
  let fixture: ComponentFixture<CellsMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellsMatrixComponent, CellComponent],
      providers: [
        { provide: Store, useClass: TestStore } // use test store instead of ngrx store
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

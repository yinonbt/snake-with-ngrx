import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsMatrixComponent } from './cells-matrix.component';

describe('CellsMatrixComponent', () => {
  let component: CellsMatrixComponent;
  let fixture: ComponentFixture<CellsMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsMatrixComponent ]
    })
    .compileComponents();
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

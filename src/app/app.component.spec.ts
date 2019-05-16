import { CellComponent } from './components/cell/cell.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GameControllerComponent } from './components/game-controller/game-controller.component';
import { CellsMatrixComponent } from './components/cells-matrix/cells-matrix.component';
import { Store } from '@ngrx/store';
import { TestStore } from './testings/utils/test-store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        GameControllerComponent,
        CellsMatrixComponent,
        CellComponent
      ],
      providers: [
        { provide: Store, useClass: TestStore }   // use test store instead of ngrx store
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'snake-with-ngrx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('snake-with-ngrx');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to snake-with-ngrx!'
    );
  });
});

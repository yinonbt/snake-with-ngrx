import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SnakeEffects } from './snake.effects';

describe('SnakeEffects', () => {
  let actions$: Observable<any>;
  let effects: SnakeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SnakeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SnakeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

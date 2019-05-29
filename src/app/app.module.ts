import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { CellsMatrixComponent } from './components/cells-matrix/cells-matrix.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store-entities/reducers/index_';
import { GameControllerComponent } from './components/game-controller/game-controller.component';

@NgModule({
  declarations: [AppComponent, CellComponent, CellsMatrixComponent, GameControllerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers), // import store with a map of reducers
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    //EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { CellsMatrixComponent } from './components/cells-matrix/cells-matrix.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store-entities/reducers';

@NgModule({
  declarations: [AppComponent, CellComponent, CellsMatrixComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers) // import store with a map of reducers
    //EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

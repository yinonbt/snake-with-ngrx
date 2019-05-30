import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { CellsMatrixComponent } from './components/cells-matrix/cells-matrix.component';
import { GameControllerComponent } from './components/game-controller/game-controller.component';

@NgModule({
  declarations: [AppComponent, CellComponent, CellsMatrixComponent, GameControllerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

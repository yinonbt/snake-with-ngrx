import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";

import { GameControllerComponent } from "./game-controller.component";
import { Store } from "@ngrx/store";
import { TestStore } from "src/app/testings/utils/test-store";
import { State_ } from "src/app/store-entities/reducers/index_";
import { GameStatus } from "src/app/enums/game-status.enum";
import { By } from "@angular/platform-browser";
import { GameStatusAction } from "src/app/store-entities/actions/game-status-action";

describe("GameControllerComponent", () => {
  let component: GameControllerComponent;
  let fixture: ComponentFixture<GameControllerComponent>;
  let store: TestStore<GameStatus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameControllerComponent],
      providers: [
        { provide: Store, useClass: TestStore } // use test store instead of ngrx store
      ]
    }).compileComponents();
  }));

  beforeEach(inject([Store], (testStore: TestStore<GameStatus>) => {
    store = testStore; // save store reference for use in tests
    store.setState(GameStatus.Stopped); // set default state
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const getTodos = () =>
    fixture.debugElement.query(By.css("#gameStatus > span"));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("initial game status is Stopped", () => {
    fixture.detectChanges();
    const spanEl = getTodos().nativeElement;
    expect(spanEl.innerHTML).toBe("Stopped");
  });

  const getTogglePlayingButton = () =>
    fixture.debugElement.query(By.css("#togglePlayingButton"));

  it("when game status is Stopped toggling switches to Running", () => {
    const dispatchSpy = spyOn(store, "dispatch");
    getTogglePlayingButton().triggerEventHandler("click", {});
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      new GameStatusAction(GameStatus.Running)
    );
  });
});

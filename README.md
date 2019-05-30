# SnakeWithNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NGRX schematics:
reference: https://www.dzurico.com/angular-ngrx-with-schematics/

1. create index.ts and modify app.module.ts:
    ng g store State --root --module=app.module.ts

2. generate app.effects.ts and modify app.module.ts:
    ng g effect App --root --module=app.module.ts

3. create reducer action and effect for specific entity:
    ng g feature snake/Snake --reducers=../reducers/index.ts

## ngrx-store-freeze
npm i --save-dev ngrx-store-freeze

1. on reducers/index.ts:
    import { storeFreeze } from 'ngrx-store-freeze';
    
    export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
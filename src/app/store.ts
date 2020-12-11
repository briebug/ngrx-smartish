import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  MemoizedSelector,
  StoreModule,
} from '@ngrx/store';

export type Shell = 'Hard' | 'Soft' | 'Dorito Locos' | 'Chalupa';
export type Meat = 'Chicken' | 'Beef' | 'Pork' | 'Steak';
export type Toppings =
  | 'Lettuce'
  | 'Tomato'
  | 'Hot Sauce'
  | 'Cheese'
  | 'Source Cream'
  | 'Guacamole';

export interface Taco {
  shell: Shell;
  meat: Meat;
  toppings: Toppings[];
}

export const TACO_FEATURE_KEY = 'taco';

export interface State {
  [TACO_FEATURE_KEY]: TacoState;
}

export interface TacoState {
  [TACO_FEATURE_KEY]: Taco;
  isLoading: boolean;
  error: string;
}

export const tacoInitialState: TacoState = {
  [TACO_FEATURE_KEY]: {
    shell: 'Dorito Locos',
    meat: 'Steak',
    toppings: [
      'Cheese',
      'Guacamole',
      'Guacamole',
      'Hot Sauce',
      'Tomato',
      'Lettuce',
    ],
  } as Taco,
  isLoading: false,
  error: '',
};

export const initialState: State = {
  [TACO_FEATURE_KEY]: tacoInitialState,
};

const tacoReducer = createReducer(initialState);

export function reducer(state: State, action: Action) {
  return tacoReducer(state, action);
}

const selectTacoFeatureKey = createFeatureSelector<State>(TACO_FEATURE_KEY);

export const selectTaco = createSelector(
  selectTacoFeatureKey,
  (state) => state?.taco
);

@NgModule({
  imports: [StoreModule.forFeature(TACO_FEATURE_KEY, reducer)],
})
export class TacoStoreModule {}

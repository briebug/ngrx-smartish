import { Component } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { selectTaco, Taco, tacoInitialState, TACO_FEATURE_KEY } from './store';

const appAction = createAction('[APP COMPONENT] Smartish Button Click');

const appActionWithProp = createAction(
  '[APP COMPONENT] Smartish Button Click With Prop',
  props<{ taco: Taco }>()
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-smartish';
  action = appAction;
  actionWithProp = appActionWithProp;
  taco$ = selectTaco;

  taco = {
    [TACO_FEATURE_KEY]: { ...tacoInitialState[TACO_FEATURE_KEY] } as Taco,
  };
}

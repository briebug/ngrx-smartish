import { Component } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { selectTaco } from './store';

const appAction = createAction('[APP COMPONENT] Smartish Button Click');

const appActionWithProp = createAction(
  '[APP COMPONENT] Smartish Button Click With Prop',
  props<{ value: number }>()
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
  prop = 5;
  taco$ = selectTaco;
}

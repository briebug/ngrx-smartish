import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionCreator, createAction, props } from '@ngrx/store';
import { selectTaco, Taco, tacoInitialState, TACO_FEATURE_KEY } from './store';

const addTaco = createAction(
  '[APP COMPONENT] Add Taco',
  props<{ taco: Taco }>()
);

const increment = createAction('[APP COMPONENT] Increment');
const decrement = createAction('[APP COMPONENT] Decrement');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  actions = { addTaco, increment, decrement };
  selectors = { selectTaco };

  form: FormGroup = new FormGroup({
    taco: new FormControl(''),
  });
}

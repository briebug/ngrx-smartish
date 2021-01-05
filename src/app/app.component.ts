import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionCreator, createAction, props } from '@ngrx/store';
import { selectTaco, Taco, tacoInitialState, TACO_FEATURE_KEY } from './store';

const addTaco = createAction(
  '[APP COMPONENT] Add Taco',
  props<{ taco: Taco }>()
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  actions = { addTaco };
  selectors = { selectTaco };

  form: FormGroup = new FormGroup({
    taco: new FormControl(''),
  });
}

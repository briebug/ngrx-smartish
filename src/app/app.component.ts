import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { createAction, props } from '@ngrx/store';
import { selectTaco, Taco } from './store';

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

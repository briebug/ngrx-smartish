import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';
import { selectTaco } from './store';

const appAction = createAction('[APP COMPONENT] Smartish Button Click');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-smartish';
  action = appAction();
  taco$ = selectTaco;
}

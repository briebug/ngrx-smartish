import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';
import {
  makeDispatcherFor,
  NgRxSmartishComponent,
} from '../../../projects/ngrx-smartish/src/lib';
import { selectTaco } from '../store';

const tacoAction = createAction(
  '[Taco Component] dispatching using NgRxSmartish Component Abstract Class'
);

@Component({
  selector: 'app-taco',
  templateUrl: './taco.component.html',
  styleUrls: ['./taco.component.scss'],
})
export class TacoComponent extends NgRxSmartishComponent {
  taco$ = this.store.select(selectTaco);
  selectors = { selectTaco };
  actions = { tacoAction };

  tacoAction = makeDispatcherFor(tacoAction);
}

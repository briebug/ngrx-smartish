import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';
import { makeDispatcherFor } from 'projects/ngrx-smartish/src/lib';

const increment = createAction('[QUANTITY COMPONENT] Increment');
const decrement = createAction('[QUANTITY COMPONENT] Decrement');

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  increment = makeDispatcherFor(increment);
  decrement = makeDispatcherFor(decrement);
}

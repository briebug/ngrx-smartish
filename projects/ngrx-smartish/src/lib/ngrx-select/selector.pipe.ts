import { Inject, Pipe, PipeTransform } from '@angular/core';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SELECT_STORE_TOKEN } from './token';

@Pipe({
  name: 'ngrxSelect',
})
export class NgRxSelectorPipe<TResult, TState = object>
  implements PipeTransform {
  constructor(
    @Inject(SELECT_STORE_TOKEN) private readonly store: Store<TState>
  ) {}

  transform(selector: MemoizedSelector<TState, TResult>): Observable<TResult> {
    return this.store.select(selector);
  }
}

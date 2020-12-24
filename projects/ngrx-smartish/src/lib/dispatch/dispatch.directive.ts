import { Directive, HostListener, Inject, Input } from '@angular/core';
import { ActionCreator, createAction, Store } from '@ngrx/store';
import { Action } from '@ngrx/store/src/models';
import { SMARTISH_STORE_TOKEN } from '../token';

const unknownAction = createAction(
  '[NGRX DISPATCH] An Unknown Action was dispatched. Please provide an action as an input on the ngrxDirective instance'
);

@Directive({
  selector: '[ngrxDispatch]',
})
export class NgRxDispatchDirective<P, A extends ActionCreator> {
  @Input('ngrxDispatch') action?: A;
  @Input() ngrxProps?: P;

  constructor(@Inject(SMARTISH_STORE_TOKEN) private store: Store) {}

  @HostListener('click')
  click(): void {
    this.dispatch();
  }

  @HostListener('submit')
  submit(): void {
    this.dispatch();
  }

  dispatch(): void {
    this.action
      ? this.store.dispatch(
          this.action(this.ngrxProps && { ...this.ngrxProps }) as Action
        )
      : this.store.dispatch(unknownAction());
  }
}

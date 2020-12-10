import { Directive, HostListener, Inject, Input } from '@angular/core';
import { Action, createAction, Store } from '@ngrx/store';
import { DISPATCH_STORE_TOKEN } from './token';

const unknownAction = createAction(
  '[NGRX DISPATCH] An Unknown Action was dispatched. Please provide an action as an input on the ngrxDirective instance'
);

@Directive({
  selector: '[ngrxDispatch]',
})
export class NgRxDispatchDirective<T extends Action = Action> {
  @Input() action: T = unknownAction() as T;

  constructor(@Inject(DISPATCH_STORE_TOKEN) private readonly store: Store) {}

  @HostListener('click')
  click(): void {
    this.dispatch();
  }

  @HostListener('submit')
  submit(): void {
    this.dispatch();
  }

  dispatch(): void {
    this.store.dispatch(this.action ? this.action : unknownAction());
  }
}

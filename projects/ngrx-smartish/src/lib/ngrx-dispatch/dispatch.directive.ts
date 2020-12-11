import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, HostListener, Inject, Input } from '@angular/core';
import { ActionCreator, createAction, Creator, Store } from '@ngrx/store';
import { Action, TypedAction } from '@ngrx/store/src/models';
import { DISPATCH_STORE_TOKEN } from './token';

const unknownAction = createAction(
  '[NGRX DISPATCH] An Unknown Action was dispatched. Please provide an action as an input on the ngrxDirective instance'
);

@Directive({
  selector: '[ngrxDispatch]',
})
export class NgRxDispatchDirective<P, A extends ActionCreator> {
  @Input() action?: A;
  @Input() prop?: P;
  @Input() propKey?: string;

  constructor(@Inject(DISPATCH_STORE_TOKEN) private store: Store) {}

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
          this.action(
            this.prop && this.propKey && { [this.propKey]: this.prop }
          ) as Action
        )
      : this.store.dispatch(unknownAction());
  }
}

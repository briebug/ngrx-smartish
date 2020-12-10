import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgRxDispatchDirective } from './dispatch.directive';
import { dispatchFactoryFunction } from './factory';
import { DISPATCH_STORE_TOKEN } from './token';

@NgModule({
  declarations: [NgRxDispatchDirective],
  imports: [CommonModule],
  providers: [
    {
      provide: DISPATCH_STORE_TOKEN,
      useFactory: dispatchFactoryFunction,
      deps: [Store],
    },
  ],
  exports: [NgRxDispatchDirective],
})
export class NgrxDispatchModule {}

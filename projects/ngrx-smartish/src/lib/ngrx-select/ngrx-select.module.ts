import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxSelectorPipe } from './selector.pipe';
import { SELECT_STORE_TOKEN } from './token';
import { selectFactoryFunction } from './factory';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [NgRxSelectorPipe],
  imports: [CommonModule],
  providers: [
    {
      provide: SELECT_STORE_TOKEN,
      useFactory: selectFactoryFunction,
      deps: [Store],
    },
  ],
  exports: [NgRxSelectorPipe],
})
export class NgRxSelectModule {}

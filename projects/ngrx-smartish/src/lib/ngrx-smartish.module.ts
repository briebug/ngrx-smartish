import { NgModule } from '@angular/core';
import { NgrxDispatchModule } from './ngrx-dispatch';
import { NgRxSelectModule } from './ngrx-select/ngrx-select.module';

@NgModule({
  declarations: [],
  imports: [NgrxDispatchModule, NgRxSelectModule],
  exports: [NgrxDispatchModule, NgRxSelectModule],
})
export class NgrxSmartishModule {}

import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MockStore,
  MockStoreConfig,
  provideMockStore,
} from '@ngrx/store/testing';
import { NgRxSmartishModule } from '../ngrx-smartish.module';
import { NgRxSelectorPipe } from '../select/selector.pipe';
import { SMARTISH_STORE_TOKEN } from '../token';

@NgModule({
  declarations: [],
  imports: [NgRxSmartishModule],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: MockStore }],
  exports: [NgRxSelectorPipe],
})
export class NgRxSmartishTestingModule {
  static forRoot(
    config?: MockStoreConfig<any>
  ): ModuleWithProviders<NgRxSmartishTestingModule> {
    return {
      ngModule: NgRxSmartishTestingModule,
      providers: [provideMockStore(config)],
    };
  }
}

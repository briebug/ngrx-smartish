import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { InjectorLocator } from './injector-locator';
import { NgRxDispatchDirective } from './ngrx-dispatch/dispatch.directive';
import { NgRxSelectorPipe } from './ngrx-select/selector.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [NgRxDispatchDirective, NgRxSelectorPipe],
  exports: [NgRxDispatchDirective, NgRxSelectorPipe],
})
export class NgrxSmartishWithLocatorModule {
  constructor(private injector: InjectorLocator) {}
}

function injectorLocationFactory(injector: Injector) {
  return new InjectorLocator(injector);
}

@NgModule({})
export class NgrxSmartishModule {
  static forRoot(): ModuleWithProviders<NgrxSmartishWithLocatorModule> {
    return {
      ngModule: NgrxSmartishWithLocatorModule,
      providers: [
        {
          provide: InjectorLocator,
          useFactory: injectorLocationFactory,
          deps: [Injector],
        },
      ],
    };
  }
}

import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { InjectorLocator } from './injector-locator';
import { NgRxDispatchDirective } from './dispatch/dispatch.directive';
import { NgRxSelectorPipe } from './select/selector.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [NgRxDispatchDirective, NgRxSelectorPipe],
  exports: [NgRxDispatchDirective, NgRxSelectorPipe],
})
export class NgRxSmartishWithLocatorModule {
  constructor(private injector: InjectorLocator) {}
}

function injectorLocationFactory(injector: Injector) {
  return new InjectorLocator(injector);
}

@NgModule({})
export class NgRxSmartishModule {
  static forRoot(): ModuleWithProviders<NgRxSmartishWithLocatorModule> {
    return {
      ngModule: NgRxSmartishWithLocatorModule,
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

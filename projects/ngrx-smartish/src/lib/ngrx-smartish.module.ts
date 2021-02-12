import { CommonModule } from '@angular/common';
import { Inject, InjectionToken, Injector, NgModule } from '@angular/core';
import { NgRxDispatchDirective } from './dispatch/dispatch.directive';
import { InjectorLocator } from './injector-locator';
import { NgRxSelectorPipe } from './select/selector.pipe';

const INJECTOR_LOCATOR_TOKEN = new InjectionToken<InjectorLocator>(
  'injector-locator'
);

export function injectorLocationFactory(injector: Injector) {
  return new InjectorLocator(injector);
}

@NgModule({
  imports: [CommonModule],
  declarations: [NgRxDispatchDirective, NgRxSelectorPipe],
  providers: [
    {
      provide: INJECTOR_LOCATOR_TOKEN,
      useFactory: injectorLocationFactory,
      deps: [Injector],
    },
  ],
  exports: [NgRxDispatchDirective, NgRxSelectorPipe],
})
export class NgRxSmartishModule {
  constructor(
    @Inject(INJECTOR_LOCATOR_TOKEN) readonly injector: InjectorLocator
  ) {}
}

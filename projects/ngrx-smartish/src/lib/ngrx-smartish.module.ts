import { CommonModule } from '@angular/common';
import { Inject, InjectionToken, Injector, NgModule } from '@angular/core';
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
  declarations: [NgRxSelectorPipe],
  providers: [
    {
      provide: INJECTOR_LOCATOR_TOKEN,
      useFactory: injectorLocationFactory,
      deps: [Injector],
    },
  ],
  exports: [NgRxSelectorPipe],
})
export class NgRxSmartishModule {
  constructor(
    @Inject(INJECTOR_LOCATOR_TOKEN) readonly injector: InjectorLocator
  ) {}
}

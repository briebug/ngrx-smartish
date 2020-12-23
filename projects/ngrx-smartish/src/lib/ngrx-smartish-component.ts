import { Store } from '@ngrx/store';
import { InjectorLocator } from './injector-locator';
import { SMARTISH_STORE_TOKEN } from './token';

export abstract class NgRxSmartishComponent {
  store: Store = InjectorLocator.injector.get(SMARTISH_STORE_TOKEN);
}

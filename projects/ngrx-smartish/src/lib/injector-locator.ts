import { Injectable, Injector } from '@angular/core';

@Injectable()
export class InjectorLocator {
  constructor(injector: Injector) {
    (InjectorLocator as any)['_injector'] = injector; // tslint:disable-line
  }
}

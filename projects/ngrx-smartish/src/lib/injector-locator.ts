import { Injector } from '@angular/core';

export class InjectorLocator {
  private static _injector: Injector;

  static get injector(): Injector {
    return InjectorLocator._injector;
  }

  constructor(injector: Injector) {
    InjectorLocator._injector = injector;
  }
}

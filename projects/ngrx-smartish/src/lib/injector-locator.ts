import { Injector } from '@angular/core';

export class InjectorLocator {
  private static _injectory: Injector;

  static get injector(): Injector {
    return InjectorLocator._injectory;
  }

  constructor(injector: Injector) {
    InjectorLocator._injectory = injector;
  }
}

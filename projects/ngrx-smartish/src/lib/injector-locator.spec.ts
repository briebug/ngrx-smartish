import { Injector } from '@angular/core';
import { InjectorLocator } from './injector-locator';

describe('InjectorLocation', () => {
  it('should create an instance', () => {
    expect(new InjectorLocator(null)).toBeTruthy();
  });
});

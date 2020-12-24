import { AbstractType, InjectionToken, Injector, Type } from '@angular/core';
import { InjectorLocator } from './injector-locator';

class TestInjector extends Injector {
  get<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>) {
    return new InjectionToken('test');
  }
}
describe('InjectorLocation', () => {
  const injector = new TestInjector();
  it('should create an instance', () => {
    expect(new InjectorLocator(injector)).toBeTruthy();
  });
});

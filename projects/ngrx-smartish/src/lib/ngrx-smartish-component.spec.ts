import { NgRxSmartishComponent } from './ngrx-smartish-component';

class TestSmartishComponent extends NgRxSmartishComponent {}

describe('NgrxSmartishComponent', () => {
  it('should create an instance', () => {
    expect(new TestSmartishComponent()).toBeTruthy();
  });
});

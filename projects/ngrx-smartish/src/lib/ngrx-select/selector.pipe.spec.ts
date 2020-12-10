import { TestBed } from '@angular/core/testing';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectFactoryFunction } from './factory';
import { NgRxSelectorPipe } from './selector.pipe';
import { SELECT_STORE_TOKEN } from './token';

describe('SelectorPipe', () => {
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxSelectorPipe],
      providers: [
        { provide: SELECT_STORE_TOKEN, useFactory: selectFactoryFunction },
        provideMockStore({ initialState }),
      ],
    });

    store = TestBed.inject(MockStore);
  });
  it('create an instance', () => {
    const pipe = new NgRxSelectorPipe(store);
    expect(pipe).toBeTruthy();
  });

  it('should dispatch to store the given MemoizedSelector', () => {
    // arrange
    const pipe = new NgRxSelectorPipe(store);
    const state = () => {
      error: 'Test Error';
    };
    const selector: MemoizedSelector<any, any> = createSelector(
      state,
      (state) => state
    );
    spyOn(store, 'select');

    // act
    pipe.transform(selector);

    // assert
    expect(store.select).toHaveBeenCalledWith(selector);
  });
});

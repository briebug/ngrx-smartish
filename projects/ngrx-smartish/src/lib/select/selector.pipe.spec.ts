import { TestBed } from '@angular/core/testing';
import { createSelector, MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SMARTISH_STORE_TOKEN } from '../token';
import { NgRxSelectorPipe } from './selector.pipe';

const smartishStoreFactory = (store: Store): Store => store;

describe('SelectorPipe', () => {
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxSelectorPipe],
      providers: [
        {
          provide: SMARTISH_STORE_TOKEN,
          useFactory: smartishStoreFactory,
          deps: [Store],
        },
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

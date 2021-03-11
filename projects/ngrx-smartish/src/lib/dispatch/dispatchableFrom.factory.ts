import {ActionCreator} from '@ngrx/store';
import {Creator, FunctionWithParametersType} from '@ngrx/store/src/models';
import {InjectorLocator} from '../injector-locator';
import {SMARTISH_STORE_TOKEN} from '../token';


export interface DispachableAction<P extends unknown[], R = void> {
  dispatch: FunctionWithParametersType<P, R>
};

export const dispatchableFrom = <
  T extends string = string,
  C extends Creator = Creator,
  P extends any[] = any[],
  R extends object = object
>(action: ActionCreator<T, C>): ActionCreator<T, C> & DispachableAction<P, R> => {
  const dispatch = (...args: P): R => {
    const store = (InjectorLocator as any)['_injector'].get(
      SMARTISH_STORE_TOKEN
    );

    return store.dispatch(action(args));
  };
  return {...action, dispatch};
};

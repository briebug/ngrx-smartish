import { ActionCreator } from '@ngrx/store';
import { Creator, FunctionWithParametersType } from '@ngrx/store/src/models';
import { makeDispatcherFor } from './makeDispatcherFor.factory';

export interface DispachableAction<P extends unknown[], R = void> {
  dispatch: FunctionWithParametersType<P, R>;
}

export const dispatchableActionFrom = <
  T extends string = string,
  C extends Creator = Creator,
  P extends any[] = any[],
  R extends object = object
>(
  action: ActionCreator<T, C>
): ActionCreator<T, C> & DispachableAction<P, R> => {
  return { ...action, dispatch: makeDispatcherFor(action) };
};

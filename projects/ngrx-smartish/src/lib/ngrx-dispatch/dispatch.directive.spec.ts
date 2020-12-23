import { NgRxDispatchDirective } from './dispatch.directive';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Action, ActionCreator, createAction, props } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { dispatchFactoryFunction } from './factory';
import { SMARTISH_STORE_TOKEN } from '../token';

const unknownAction = createAction(
  '[NGRX DISPATCH] An Unknown Action was dispatched. Please provide an action as an input on the ngrxDirective instance'
);

@Component({
  template: `<button type="button" ngrxDispatch></button>`,
})
class TestNgrxDispatchComponent {}

describe('NgRxDispatchDirective', () => {
  let store: MockStore;
  let fixture: ComponentFixture<TestNgrxDispatchComponent>;
  const initialState = {};

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [NgRxDispatchDirective, TestNgrxDispatchComponent],
      providers: [
        { provide: SMARTISH_STORE_TOKEN, useFactory: dispatchFactoryFunction },
        provideMockStore({ initialState }),
      ],
    }).createComponent(TestNgrxDispatchComponent);

    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create an instance', () => {
    const directive = new NgRxDispatchDirective(store);
  });

  it('click event calls HostListener click', () => {
    // arrange
    const button = fixture.debugElement.query(
      By.directive(NgRxDispatchDirective)
    );
    const directive = button.injector.get(NgRxDispatchDirective);
    spyOn(directive, 'click');

    // act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // assert
    expect(directive.click).toHaveBeenCalledTimes(1);
  });
  it('submit event calls HostListener submit', () => {
    // arrange
    const button = fixture.debugElement.query(
      By.directive(NgRxDispatchDirective)
    );
    const directive = button.injector.get(NgRxDispatchDirective);
    spyOn(directive, 'submit');

    // act
    button.triggerEventHandler('submit', null);
    fixture.detectChanges();

    // assert
    expect(directive.submit).toHaveBeenCalledTimes(1);
  });
  it('should call dispatch on click', () => {
    // arrange
    const directive = new NgRxDispatchDirective(store);
    spyOn(directive, 'dispatch');

    // act
    directive.click();

    // assert
    expect(directive.dispatch).toHaveBeenCalledTimes(1);
  });
  it('should call dispatch on submit', () => {
    // arrange
    const directive = new NgRxDispatchDirective(store);
    spyOn(directive, 'dispatch');

    // act
    directive.submit();

    // assert
    expect(directive.dispatch).toHaveBeenCalledTimes(1);
  });
  it('should dispatch to store.dispatch with Input action if it exists', () => {
    // arrange
    const directive = new NgRxDispatchDirective(store);
    const action = createAction('Test Action');
    directive.action = action;
    spyOn(store, 'dispatch');

    // act
    directive.dispatch();

    // assert
    expect(store.dispatch).toHaveBeenCalledOnceWith(action());
  });
  it('should dispatch to store.dispatch with Prop', () => {
    // arrange
    const directive = new NgRxDispatchDirective(store);
    const action = createAction('Test Action', props<{ sum: number }>());
    directive.action = action;
    directive.ngrxProps = { sum: 5 };
    spyOn(store, 'dispatch');

    // act
    directive.dispatch();

    // assert
    expect(store.dispatch).toHaveBeenCalledOnceWith(
      action({ sum: 5 }) as Action
    );
  });
  it('should dispatch unknown action if Input action is not defined', () => {
    // arrange
    const directive = new NgRxDispatchDirective(store);
    const action = unknownAction();
    spyOn(store, 'dispatch');

    // act
    directive.dispatch();

    // assert
    expect(store.dispatch).toHaveBeenCalledOnceWith(action);
  });
});

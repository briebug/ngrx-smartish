# NgRx Smartish

NgRx Smartish is a small utility library that makes creating "smartish" components in Angular a breeze. Smartish Components mixed with NgRx, provide a clean and declartive approach to building applications in Angular. 


## Getting Started

You can install the package using `npm install @briebug/ngrx-smartish`

Next you will need to import `NgrxSmartishModule` in `app.module` as well as provide store using the `SMARTISH_STORE_TOKEN`.

```
import { NgRxSmartishModule, SMARTISH_STORE_TOKEN } from '@briebug/ngrx-smartish';
imoprt { StoreModule, Store } from '@ngrx/store';

@NgModule({
  imports: [
      NgRxSmartishModule,
      StoreModule.forRoot({...})
  ],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: Store }]
})
export class AppModule {}
```


## SmartSelect
With NgRx Smartish you can reference NgRx Selectors directly in your Angular Component's template without the need to inject the `store`. You simple need to add the `MemoizedSelector` in your component class and reference that property with the `smartSelector` pipe in your template.

```
import { selectError } from 'YOUR-STORE'

@Component({
    selector: 'app-error',
    template: `<p>{{ selectors.selectError | smartSelect | async }}</p>`
})
export class ErrorComponent {
    selectors = { selectError };
}
```

## SmartDispatch

With NgRx Smartish you can dispatch actions directly in your Angular Component's template without the need to dispatch an `@Output() EventEmitter` or injecting the `store`. You simply can use either the `smartDispatch` or `smartAction` methods.

### smartAction
With NgRx Smartish `smartAction` you can call `dispatch` on your actions directly in your component templates. 

```
import { smartAction } from '@briebug/ngrx-smartish';
import { tacoAdded } from '...my-actions';

@Component({
    selector: 'app-component',
    template: `<button (click)="addTaco.dispatch($event)">Add Taco</button>
})
export class MyComponent {
    addTaco = smartAction(tacoAdded);
}
```

### smartDispatch
With NgRx Smartish `smartDispatch` you can automatically dispatch actions in your component templates. (Note: This is similar to `smartAction` but it calls dispatch automatically for you)

```
import { smartDispatch } from '@briebug/ngrx-smartish';
import { tacoAdded } from '...my-actions';

@Component({
    selector: 'app-component',
    template: `<button (click)="addTaco($event)">Add Taco</button>
})
export class MyComponent {
    addTaco = smartDispatch(tacoAdded);
}
```

## NgRxSmartishComponent

With NgRx Smartish you can reference your NgRx store directly in your Components classes (or templates) without providing the store in the constructor. It's as easy as having your component extends `NgRxSmartishComponent`. 

```
@Component({
    selector: 'app-tacos',
    template: `<app-taco *ngFor="let taco of (tacos$ | async)" [taco]="taco></app-taco>`
})
export class TacosComponent extends NgRxSmartishComponent {
    tacos$ = store.select(selectTacos);
}
```

## Testing
Testing with NgRxSmartish is made simple with the `NgRxSmartishTestingModule`. Just import `NgRxSmartishTestingModule` into your `TestBed` with the `forRoot()` static method. You can also pass an optional `MockStoreConfig` inside of `forRoot()` to save you from having to provide `provideMockStore(...)` in your tests. 

```
const config = { };
describe('YourSmartishComponent', () => {
  beforeEach(async () => {
    imports: [NgRxSmartishTestingModule.forRoot({ initialState: {...}})],
    declarations: [YourSmartishComponent]
  });
});
```
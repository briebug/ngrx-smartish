# NgRx Smartish

NgRx Smartish is a small utility library that makes creating "smartish" components in Angular a breeze.


## Getting Started

You will first need to install using `npm install @briebug/ngrx-smartish???`

Next you will need to import `NgrxSmartishModule` in `app.module`

## ngrxDispatch

With NgRx Smartish you can dispatch actions directly in your Angular Component's template without the need to dispatch an `@Output() EventEmitter` or injecting the `store`. You simply need to add the `ngrxDispatch` directive in your template and supply it a propless action as an @Input();

```
const buttonClickedAction = createAction('[TACO COMPONENT] Button Clicked');

@Component({
    selector: 'app-taco',
    template: `<button type="button" [ngrxDispatch]="action">Click Me</button>`
})
export class TacoComponent {
    action = buttonClickedAction
}
```

You can also dispatch actions with props like so:

```
const buttonClickActionWithProp = createAction('[TACO COMPONENT], props<{ taco: Taco }>());

@Component({
    selector: 'app-taco',
    template: `<button type="button" [ngrxDispatch]="action" [ngrxProp]="tacoProp">Click Me</button>
})
export class TacoComponent {
    action = buttonClickActionWithProp;
    tacoProp = { taco: { } as Taco };
}
```

## ngrxSelector

With NgRx Smartish you can reference NgRx Selectors directly in your Angular Component's template without the need to inject the `store`. You simple need to add the `MemoizedSelector` in your component class and reference that property with the `ngrxSelector` pipe in your template.

```
import { selectError } from 'YOUR-STORE'

@Component({
    selector: 'app-error',
    template: `<p>{{ error$ | ngrxSelector | async }}</p>`
})
export class ErrorComponent {
    error$ = selectError;
}
```



## CONTRIBUTING

### BUILD
- You can build the library running `npm run build:smartish` or `ng build ngrx-smartish`
- You can build the app running `npm run build` or `ng build`

### SERVE
- You can serve the app running `npm run start` or `ng serve`

### TEST
- You can run the library tests using `npm run test:smartish` or `ng test ngrx-smartish`
- You can run the app tests using `npm run test` or `ng test`
  
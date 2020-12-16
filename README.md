# NgRx Smartish

NgRx Smartish is a small utility library that makes creating "smartish" components in Angular a breeze.


## Getting Started

You will first need to install using `npm install @briebug/ngrx-smartish???`

Next you will need to import `NgrxSmartishModule` in `app.module`

## ngrxDispatch

With NgRx Smartish you can dispatch actions directly in your Angular Component's template without the need to dispatch an `@Output() EventEmitter` or injecting the `store`. You simply need to add the `ngrxDispatch` directive in your template and supply it a propless action as an @Input();

```
const increment = createAction('[TACO COMPONENT] Increment');
const decrement = createAction('[TACO COMPONENT] Decrement');

@Component({
    selector: 'app-taco',
    template: `
        <button type="button" [ngrxDispatch]="actions.increment">+</button>
        <button type="button" [ngrxDispatch]="actions.decrement">-</button>
    `
})
export class TacoComponent {
    actions = { increment, decrement }
}
```

You can also dispatch actions with props like so:

```
const addTaco = createAction('[TACO COMPONENT] Add Taco', props<{ taco: Taco }>());

@Component({
    selector: 'app-taco',
    template: `<button type="button" [ngrxDispatch]="actions.addTaco" [ngrxProp]="{ taco: form.value }">Click Me</button>
})
export class TacoComponent {
    actions = { addTaco }
    form: FormGroup;
}
```

## ngrxSelect

With NgRx Smartish you can reference NgRx Selectors directly in your Angular Component's template without the need to inject the `store`. You simple need to add the `MemoizedSelector` in your component class and reference that property with the `ngrxSelector` pipe in your template.

```
import { selectError } from 'YOUR-STORE'

@Component({
    selector: 'app-error',
    template: `<p>{{ selectors.selectError | ngrxSelect | async }}</p>`
})
export class ErrorComponent {
    selectors = { selectError };
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
  
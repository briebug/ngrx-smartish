import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';

export const SELECT_STORE_TOKEN = new InjectionToken<Store>('store');

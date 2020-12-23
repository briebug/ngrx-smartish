import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';

export const SMARTISH_STORE_TOKEN = new InjectionToken<Store>('token');

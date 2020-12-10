import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';

export const DISPATCH_STORE_TOKEN = new InjectionToken<Store>('token');

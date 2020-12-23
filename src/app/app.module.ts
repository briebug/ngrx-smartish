import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxSmartishModule } from 'projects/ngrx-smartish/src/lib/ngrx-smartish.module';
import { SMARTISH_STORE_TOKEN } from 'projects/ngrx-smartish/src/public-api';
import { AppComponent } from './app.component';
import { TacoStoreModule } from './store';
import { TacoComponent } from './taco/taco.component';

@NgModule({
  declarations: [AppComponent, TacoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgrxSmartishModule.forRoot(),
    TacoStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: Store }],
  bootstrap: [AppComponent],
})
export class AppModule {}

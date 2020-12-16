import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxSmartishModule } from 'projects/ngrx-smartish/src/lib/ngrx-smartish.module';
import { AppComponent } from './app.component';
import { TacoStoreModule } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgrxSmartishModule,
    TacoStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgRxSmartishTestingModule } from '../../projects/ngrx-smartish/src/lib';
import { AppComponent } from './app.component';
import { QuantityComponent } from './quantity/quantity.component';
import { TacoComponent } from './taco/taco.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxSmartishTestingModule.forRoot(), ReactiveFormsModule],
      declarations: [AppComponent, QuantityComponent, TacoComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

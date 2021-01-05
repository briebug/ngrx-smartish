import { TestBed } from '@angular/core/testing';
import { NgRxSmartishTestingModule } from 'projects/ngrx-smartish/src/lib';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxSmartishTestingModule.forRoot()],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

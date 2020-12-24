import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NgRxSmartishTestingModule } from 'projects/ngrx-smartish/src/lib';
import { TacoComponent } from './taco.component';

describe('TacoComponent', () => {
  let component: TacoComponent;
  let fixture: ComponentFixture<TacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TacoComponent],
      imports: [NgRxSmartishTestingModule],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStoreConfig } from '@ngrx/store/testing';
import { NgRxSmartishTestingModule } from '../../../projects/ngrx-smartish/src/lib';

import { QuantityComponent } from './quantity.component';

describe('QuantityComponent', () => {
  let component: QuantityComponent;
  let fixture: ComponentFixture<QuantityComponent>;

  const config = { initialState: {} } as MockStoreConfig<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuantityComponent],
      imports: [NgRxSmartishTestingModule.forRoot(config)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

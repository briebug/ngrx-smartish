import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRxSmartishTestingModule } from 'projects/ngrx-smartish/src/lib';

import { QuantityComponent } from './quantity.component';

describe('QuantityComponent', () => {
  let component: QuantityComponent;
  let fixture: ComponentFixture<QuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuantityComponent],
      imports: [NgRxSmartishTestingModule.forRoot()],
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

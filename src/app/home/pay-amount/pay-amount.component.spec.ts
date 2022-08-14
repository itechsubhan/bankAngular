import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAmountComponent } from './pay-amount.component';

describe('PayAmountComponent', () => {
  let component: PayAmountComponent;
  let fixture: ComponentFixture<PayAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAmount2Component } from './pay-amount2.component';

describe('PayAmount2Component', () => {
  let component: PayAmount2Component;
  let fixture: ComponentFixture<PayAmount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayAmount2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayAmount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

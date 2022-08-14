import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSdnComponent } from './check-sdn.component';

describe('CheckSdnComponent', () => {
  let component: CheckSdnComponent;
  let fixture: ComponentFixture<CheckSdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckSdnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckSdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

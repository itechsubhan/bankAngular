import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRecieverComponent } from './check-reciever.component';

describe('CheckRecieverComponent', () => {
  let component: CheckRecieverComponent;
  let fixture: ComponentFixture<CheckRecieverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRecieverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

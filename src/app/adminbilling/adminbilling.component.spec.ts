import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbillingComponent } from './adminbilling.component';

describe('AdminbillingComponent', () => {
  let component: AdminbillingComponent;
  let fixture: ComponentFixture<AdminbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

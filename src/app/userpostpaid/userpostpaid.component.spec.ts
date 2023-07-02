import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostpaidComponent } from './userpostpaid.component';

describe('UserpostpaidComponent', () => {
  let component: UserpostpaidComponent;
  let fixture: ComponentFixture<UserpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

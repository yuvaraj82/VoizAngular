import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprepaidComponent } from './userprepaid.component';

describe('UserprepaidComponent', () => {
  let component: UserprepaidComponent;
  let fixture: ComponentFixture<UserprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprepaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

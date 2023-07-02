import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindongleComponent } from './admindongle.component';

describe('AdmindongleComponent', () => {
  let component: AdmindongleComponent;
  let fixture: ComponentFixture<AdmindongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindongleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

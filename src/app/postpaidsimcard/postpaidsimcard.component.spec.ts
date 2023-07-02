import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidsimcardComponent } from './postpaidsimcard.component';

describe('PostpaidsimcardComponent', () => {
  let component: PostpaidsimcardComponent;
  let fixture: ComponentFixture<PostpaidsimcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidsimcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpaidsimcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

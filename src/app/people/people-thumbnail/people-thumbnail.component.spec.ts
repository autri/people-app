import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleThumbnailComponent } from './people-thumbnail.component';

describe('PeopleThumbnailComponent', () => {
  let component: PeopleThumbnailComponent;
  let fixture: ComponentFixture<PeopleThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

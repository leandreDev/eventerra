import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingFatComponent } from './heading-fat.component';

describe('HeadingFatComponent', () => {
  let component: HeadingFatComponent;
  let fixture: ComponentFixture<HeadingFatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingFatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

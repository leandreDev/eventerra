import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFeaturesComponent } from './three-features.component';

describe('ThreeFeaturesComponent', () => {
  let component: ThreeFeaturesComponent;
  let fixture: ComponentFixture<ThreeFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

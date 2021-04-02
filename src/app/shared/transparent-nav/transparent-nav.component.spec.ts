import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentNavComponent } from './transparent-nav.component';

describe('TransparentNavComponent', () => {
  let component: TransparentNavComponent;
  let fixture: ComponentFixture<TransparentNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransparentNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

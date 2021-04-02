import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPremiumComponent } from './product-premium.component';

describe('ProductPremiumComponent', () => {
  let component: ProductPremiumComponent;
  let fixture: ComponentFixture<ProductPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

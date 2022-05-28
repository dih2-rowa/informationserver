import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubPageComponent } from './product-sub-page.component';

describe('ProductSubPageComponent', () => {
  let component: ProductSubPageComponent;
  let fixture: ComponentFixture<ProductSubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

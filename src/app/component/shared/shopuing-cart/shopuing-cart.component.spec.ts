import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopuingCartComponent } from './shopuing-cart.component';

describe('ShopuingCartComponent', () => {
  let component: ShopuingCartComponent;
  let fixture: ComponentFixture<ShopuingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopuingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopuingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSetupComponent } from './shipping-setup.component';

describe('ShippingSetupComponent', () => {
  let component: ShippingSetupComponent;
  let fixture: ComponentFixture<ShippingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

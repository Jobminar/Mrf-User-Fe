import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingStockVechileComponent } from './selling-stock-vechile.component';

describe('SellingStockVechileComponent', () => {
  let component: SellingStockVechileComponent;
  let fixture: ComponentFixture<SellingStockVechileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellingStockVechileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellingStockVechileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingStocksComponent } from './selling-stocks.component';

describe('SellingStocksComponent', () => {
  let component: SellingStocksComponent;
  let fixture: ComponentFixture<SellingStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellingStocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellingStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

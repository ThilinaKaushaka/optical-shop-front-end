import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewPanelComponent } from './order-view-panel.component';

describe('OrderViewPanelComponent', () => {
  let component: OrderViewPanelComponent;
  let fixture: ComponentFixture<OrderViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderViewPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

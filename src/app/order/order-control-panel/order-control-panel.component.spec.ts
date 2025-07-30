import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderControlPanelComponent } from './order-control-panel.component';

describe('OrderControlPanelComponent', () => {
  let component: OrderControlPanelComponent;
  let fixture: ComponentFixture<OrderControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderControlPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

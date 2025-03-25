import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerControllPanelComponent } from './customer-controll-panel.component';

describe('CustomerControllPanelComponent', () => {
  let component: CustomerControllPanelComponent;
  let fixture: ComponentFixture<CustomerControllPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerControllPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerControllPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

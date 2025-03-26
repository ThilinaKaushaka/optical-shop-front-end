import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLastActive10TableComponent } from './customer-last-active-10-table.component';

describe('CustomerLastActive10TableComponent', () => {
  let component: CustomerLastActive10TableComponent;
  let fixture: ComponentFixture<CustomerLastActive10TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerLastActive10TableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLastActive10TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

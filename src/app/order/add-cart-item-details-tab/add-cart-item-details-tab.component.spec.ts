import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartItemDetailsTabComponent } from './add-cart-item-details-tab.component';

describe('AddCartItemDetailsTabComponent', () => {
  let component: AddCartItemDetailsTabComponent;
  let fixture: ComponentFixture<AddCartItemDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCartItemDetailsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCartItemDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

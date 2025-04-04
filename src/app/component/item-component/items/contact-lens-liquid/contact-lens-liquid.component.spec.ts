import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLensLiquidComponent } from './contact-lens-liquid.component';

describe('ContactLensLiquidComponent', () => {
  let component: ContactLensLiquidComponent;
  let fixture: ComponentFixture<ContactLensLiquidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLensLiquidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLensLiquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

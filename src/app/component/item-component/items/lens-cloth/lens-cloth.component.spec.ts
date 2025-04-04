import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensClothComponent } from './lens-cloth.component';

describe('LensClothComponent', () => {
  let component: LensClothComponent;
  let fixture: ComponentFixture<LensClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LensClothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LensClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

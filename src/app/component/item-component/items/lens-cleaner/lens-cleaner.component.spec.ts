import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensCleanerComponent } from './lens-cleaner.component';

describe('LensCleanerComponent', () => {
  let component: LensCleanerComponent;
  let fixture: ComponentFixture<LensCleanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LensCleanerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LensCleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosePadComponent } from './nose-pad.component';

describe('NosePadComponent', () => {
  let component: NosePadComponent;
  let fixture: ComponentFixture<NosePadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosePadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

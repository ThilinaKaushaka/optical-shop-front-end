import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainComponent } from './chain.component';

describe('ChainComponent', () => {
  let component: ChainComponent;
  let fixture: ComponentFixture<ChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

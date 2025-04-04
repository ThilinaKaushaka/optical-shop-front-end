import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailComponent } from './nail.component';

describe('NailComponent', () => {
  let component: NailComponent;
  let fixture: ComponentFixture<NailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

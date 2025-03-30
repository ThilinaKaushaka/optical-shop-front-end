import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemControllPanelComponent } from './item-controll-panel.component';

describe('ItemControllPanelComponent', () => {
  let component: ItemControllPanelComponent;
  let fixture: ComponentFixture<ItemControllPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemControllPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemControllPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCrudPanelComponent } from './item-crud-panel.component';

describe('ItemCrudPanelComponent', () => {
  let component: ItemCrudPanelComponent;
  let fixture: ComponentFixture<ItemCrudPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCrudPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCrudPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

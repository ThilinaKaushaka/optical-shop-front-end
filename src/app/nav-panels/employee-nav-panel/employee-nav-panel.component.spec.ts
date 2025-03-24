import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNavPanelComponent } from './employee-nav-panel.component';

describe('EmployeeNavPanelComponent', () => {
  let component: EmployeeNavPanelComponent;
  let fixture: ComponentFixture<EmployeeNavPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeNavPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { CustomerCrudComponent } from "./customer-crud/customer-crud.component";

@Component({
  selector: 'app-customer-controll-panel',
  imports: [CustomerCrudComponent],
  templateUrl: './customer-controll-panel.component.html',
  styleUrl: './customer-controll-panel.component.css'
})
export class CustomerControllPanelComponent {

}

import { Component } from '@angular/core';
import { CustomerCrudComponent } from "../customer-crud/customer-crud.component";
import { CustomerLastActive10TableComponent } from "../customer-last-active-10-table/customer-last-active-10-table.component";
import { ItemCrudPanelComponent } from "../../component/item-component/item-crud-panel/item-crud-panel.component";

@Component({
  selector: 'app-customer-controll-panel',
  imports: [CustomerCrudComponent, CustomerLastActive10TableComponent, ItemCrudPanelComponent],
  templateUrl: './customer-controll-panel.component.html',
  styleUrl: './customer-controll-panel.component.css'
})
export class CustomerControllPanelComponent {

}

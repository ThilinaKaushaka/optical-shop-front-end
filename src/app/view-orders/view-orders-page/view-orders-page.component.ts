import { Component } from '@angular/core';
import { OrderViewPanelComponent } from "../order-view-panel/order-view-panel.component";

@Component({
  selector: 'app-view-orders-page',
  imports: [OrderViewPanelComponent],
  templateUrl: './view-orders-page.component.html',
  styleUrl: './view-orders-page.component.css'
})
export class ViewOrdersPageComponent {

}

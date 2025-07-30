import { Routes } from '@angular/router';
import { CustomerControllPanelComponent } from './customer/customer-controll-panel/customer-controll-panel.component';
import { ItemControllPanelComponent } from './component/item-component/item-controll-panel/item-controll-panel.component';
import { OrderControlPanelComponent } from './order/order-control-panel/order-control-panel.component';

export const routes: Routes = [
    {
        path:"customer-panel",
        component:CustomerControllPanelComponent
    },{
        path:"item-panel",
        component:ItemControllPanelComponent
    },{
        path:"order-panel",
        component:OrderControlPanelComponent
    }
];

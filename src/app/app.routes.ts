import { Routes } from '@angular/router';
import { CustomerControllPanelComponent } from './customer/customer-controll-panel/customer-controll-panel.component';
import { ItemControllPanelComponent } from './component/item-component/item-controll-panel/item-controll-panel.component';
import { OrderControlPanelComponent } from './order/order-control-panel/order-control-panel.component';
import { ViewOrdersPageComponent } from './view-orders/view-orders-page/view-orders-page.component';
import { AnalysisPageComponent } from './analysis/analysis-page/analysis-page.component';
import { AdminNavPanelComponent } from './nav-panels/admin-nav-panel/admin-nav-panel.component';

export const routes: Routes = [
    {
        path:"home",
        component:AdminNavPanelComponent
    },{
        path:"customer-panel",
        component:CustomerControllPanelComponent
    },{
        path:"item-panel",
        component:ItemControllPanelComponent
    },{
        path:"order-panel",
        component:OrderControlPanelComponent
    },{
        path:"order-details",
        component:ViewOrdersPageComponent
    },{
        path:"analysis",
        component:AnalysisPageComponent
    }
];

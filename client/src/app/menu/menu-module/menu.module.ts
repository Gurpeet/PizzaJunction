import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuRoutes } from './../menuroutes/menu.routes';
import { MenuComponent } from './../menu.component';
import { MenuItemsComponent } from './../menuitems/menuitems.component';
import { OrderSummaryComponent } from './../ordersummary/ordersummary.component';
import { CheckoutComponent } from './../checkout/checkout.component';
import { StorageService } from './../../shared/services/storage.service';
import { Globals } from './../../shared/components/globals/global';
import { OrderConfirmation } from './../../menu/order-confirmation/order-confirmation.component';
import { MenuDeliveryAddressComponent } from './../menu-delivery-address/menu-delivery-address.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(MenuRoutes)
    ],
    declarations: [
        MenuComponent,
        MenuItemsComponent,
        OrderSummaryComponent,
        CheckoutComponent,
        OrderConfirmation,
        MenuDeliveryAddressComponent
    ],
    providers: [
        StorageService,
        Globals
    ]
})
export class MenuModule { }

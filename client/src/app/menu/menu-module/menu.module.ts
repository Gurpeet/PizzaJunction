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
import { DeliveryAddressResolver } from './../../delivery-address/delivery-address.resolver';
import { AddressService } from './../../shared/services/address.service';
import { ModalModule } from 'ng2-modal';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ItemTypeResolver } from './../itemtype-resolver/itemtype-resolver.service';
import { MenuItemsResolver } from './../menuitems-resolver/menuItems-resolver.service';
import { OrderListComponent } from './../../menu/order-list/order-list.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';

// Pipes
import { SearchFilterPipe } from './../../shared/pipes/text-search.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        DataTableModule,
        SharedModule,
        ScrollToModule.forRoot(),
        RouterModule.forChild(MenuRoutes)
    ],
    declarations: [
        MenuComponent,
        MenuItemsComponent,
        OrderSummaryComponent,
        OrderListComponent,
        CheckoutComponent,
        OrderConfirmation,
        MenuDeliveryAddressComponent,
        SearchFilterPipe
    ],
    providers: [
        StorageService,
        Globals,
        AddressService,
        DeliveryAddressResolver,
        ItemTypeResolver,
        MenuItemsResolver
    ]
})
export class MenuModule { }

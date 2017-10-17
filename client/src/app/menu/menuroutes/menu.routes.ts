import { MenuComponent } from './../menu.component';
import { MenuItemsResolver } from './../menuitems-resolver/menuItems-resolver.service';
import { ItemTypeResolver } from './../itemtype-resolver/itemtype-resolver.service';
import { CheckoutComponent } from './../checkout/checkout.component';
import { OrderConfirmation } from './../order-confirmation/order-confirmation.component';
import { DeliveryAddressResolver } from './../../delivery-address/delivery-address.resolver';
import { OrderListComponent } from './../order-list/order-list.component';

export const MenuRoutes = [
    { path: '', component: MenuComponent, resolve: { menuItems: MenuItemsResolver, itemTypes: ItemTypeResolver } },
    { path: 'checkout', component: CheckoutComponent, resolve: { states: DeliveryAddressResolver } },
    { path: 'confirmation/:id', component: OrderConfirmation },
    { path: 'order-list', component: OrderListComponent }
];

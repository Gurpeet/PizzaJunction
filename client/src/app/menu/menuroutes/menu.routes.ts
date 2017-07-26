import { MenuComponent } from './../menu.component';
import { MenuItemsResolver } from './../menuitems-resolver/menuItems-resolver.service';
import { CheckoutComponent } from './../checkout/checkout.component';
import { OrderConfirmation } from './../order-confirmation/order-confirmation.component';
import { DeliveryAddressResolver } from './../../delivery-address/delivery-address.resolver';

export const MenuRoutes = [
    { path: '', component: MenuComponent, resolve: { menuItems: MenuItemsResolver } },
    { path: 'checkout', component: CheckoutComponent, resolve: {states: DeliveryAddressResolver }},
    { path: 'confirmation', component: OrderConfirmation}
];

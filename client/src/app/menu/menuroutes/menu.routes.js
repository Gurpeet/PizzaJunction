"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_component_1 = require("./../menu.component");
var menuItems_resolver_service_1 = require("./../menuitems-resolver/menuItems-resolver.service");
var itemtype_resolver_service_1 = require("./../itemtype-resolver/itemtype-resolver.service");
var checkout_component_1 = require("./../checkout/checkout.component");
var order_confirmation_component_1 = require("./../order-confirmation/order-confirmation.component");
var delivery_address_resolver_1 = require("./../../delivery-address/delivery-address.resolver");
exports.MenuRoutes = [
    { path: '', component: menu_component_1.MenuComponent, resolve: { menuItems: menuItems_resolver_service_1.MenuItemsResolver, itemTypes: itemtype_resolver_service_1.ItemTypeResolver } },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent, resolve: { states: delivery_address_resolver_1.DeliveryAddressResolver } },
    { path: 'confirmation', component: order_confirmation_component_1.OrderConfirmation }
];
//# sourceMappingURL=menu.routes.js.map
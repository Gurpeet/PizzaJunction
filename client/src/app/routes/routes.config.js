"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./../home/home.component");
var error404_component_1 = require("./../error404/error404.component");
var delivery_address_component_1 = require("./../delivery-address/delivery-address.component");
exports.RouteConfig = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'menu', loadChildren: '/app/menu/menu-module/menu.module#MenuModule' },
    { path: 'login', loadChildren: '/app/login/login-module/login.module#LoginModule' },
    { path: 'orders', loadChildren: '/app/orders/orders-module/orders.module#OrdersModule' },
    { path: 'about-us', loadChildren: '/app/about-us/about-us.module#AboutUsModule' },
    { path: 'contact-us', loadChildren: '/app/contact-us/contact-us.module#ContactUsModule' },
    { path: 'delivery-address', component: delivery_address_component_1.DeliveryAddress },
    { path: 'error404', component: error404_component_1.PageNotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
];
//# sourceMappingURL=routes.config.js.map
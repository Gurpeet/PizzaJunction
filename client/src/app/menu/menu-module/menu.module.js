"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var menu_routes_1 = require("./../menuroutes/menu.routes");
var menu_component_1 = require("./../menu.component");
var menuitems_component_1 = require("./../menuitems/menuitems.component");
var ordersummary_component_1 = require("./../ordersummary/ordersummary.component");
var checkout_component_1 = require("./../checkout/checkout.component");
var storage_service_1 = require("./../../shared/services/storage.service");
var global_1 = require("./../../shared/components/globals/global");
var order_confirmation_component_1 = require("./../../menu/order-confirmation/order-confirmation.component");
var menu_delivery_address_component_1 = require("./../menu-delivery-address/menu-delivery-address.component");
var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(menu_routes_1.MenuRoutes)
        ],
        declarations: [
            menu_component_1.MenuComponent,
            menuitems_component_1.MenuItemsComponent,
            ordersummary_component_1.OrderSummaryComponent,
            checkout_component_1.CheckoutComponent,
            order_confirmation_component_1.OrderConfirmation,
            menu_delivery_address_component_1.MenuDeliveryAddressComponent
        ],
        providers: [
            storage_service_1.StorageService,
            global_1.Globals
        ]
    })
], MenuModule);
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map
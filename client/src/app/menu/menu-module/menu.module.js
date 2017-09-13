"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var menu_routes_1 = require("./../menuroutes/menu.routes");
var menu_component_1 = require("./../menu.component");
var menuitems_component_1 = require("./../menuitems/menuitems.component");
var ordersummary_component_1 = require("./../ordersummary/ordersummary.component");
var checkout_component_1 = require("./../checkout/checkout.component");
var storage_service_1 = require("./../../shared/services/storage.service");
var global_1 = require("./../../shared/components/globals/global");
var order_confirmation_component_1 = require("./../../menu/order-confirmation/order-confirmation.component");
var menu_delivery_address_component_1 = require("./../menu-delivery-address/menu-delivery-address.component");
var delivery_address_resolver_1 = require("./../../delivery-address/delivery-address.resolver");
var address_service_1 = require("./../../shared/services/address.service");
var ng2_modal_1 = require("ng2-modal");
var ngx_scroll_to_1 = require("@nicky-lenaers/ngx-scroll-to");
var itemtype_resolver_service_1 = require("./../itemtype-resolver/itemtype-resolver.service");
var menuItems_resolver_service_1 = require("./../menuitems-resolver/menuItems-resolver.service");
// Pipes
var text_search_pipe_1 = require("./../../shared/pipes/text-search.pipe");
var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_modal_1.ModalModule,
            ngx_scroll_to_1.ScrollToModule.forRoot(),
            router_1.RouterModule.forChild(menu_routes_1.MenuRoutes)
        ],
        declarations: [
            menu_component_1.MenuComponent,
            menuitems_component_1.MenuItemsComponent,
            ordersummary_component_1.OrderSummaryComponent,
            checkout_component_1.CheckoutComponent,
            order_confirmation_component_1.OrderConfirmation,
            menu_delivery_address_component_1.MenuDeliveryAddressComponent,
            text_search_pipe_1.SearchFilterPipe
        ],
        providers: [
            storage_service_1.StorageService,
            global_1.Globals,
            address_service_1.AddressService,
            delivery_address_resolver_1.DeliveryAddressResolver,
            itemtype_resolver_service_1.ItemTypeResolver,
            menuItems_resolver_service_1.MenuItemsResolver
        ]
    })
], MenuModule);
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map
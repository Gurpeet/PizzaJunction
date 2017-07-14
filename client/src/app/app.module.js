"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ngx_bootstrap_1 = require("ngx-bootstrap");
// Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./shared/components/header/header.component");
var footer_component_1 = require("./shared/components/footer/footer.component");
var home_component_1 = require("./home/home.component");
var error404_component_1 = require("./error404/error404.component");
var menuItems_resolver_service_1 = require("./menu/menuitems-resolver/menuItems-resolver.service");
var delivery_address_component_1 = require("./delivery-address/delivery-address.component");
var ng_pick_datetime_1 = require("ng-pick-datetime");
// Services
var menu_service_1 = require("./shared/services/menu.service");
var storage_service_1 = require("./shared/services/storage.service");
// Models
// Routing
var routes_config_1 = require("./routes/routes.config");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_pick_datetime_1.DateTimePickerModule,
            ngx_bootstrap_1.CarouselModule.forRoot(),
            router_1.RouterModule.forRoot(routes_config_1.RouteConfig),
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            error404_component_1.PageNotFoundComponent,
            delivery_address_component_1.DeliveryAddress
        ],
        providers: [
            menu_service_1.MenuService,
            menuItems_resolver_service_1.MenuItemsResolver,
            storage_service_1.StorageService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
//Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./shared/components/header/header.component");
var footer_component_1 = require("./shared/components/footer/footer.component");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var menuitems_component_1 = require("./menu/menuitems/menuitems.component");
var ordersummary_component_1 = require("./menu/ordersummary/ordersummary.component");
var login_component_1 = require("./login/login.component");
var error404_component_1 = require("./error404/error404.component");
var menuItems_resolver_service_1 = require("./menu/menuitems-resolver/menuItems-resolver.service");
//Services
var menu_service_1 = require("./shared/services/menu.service");
//Models
var menuitem_1 = require("./shared/models/menuitem");
//Routing
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
            router_1.RouterModule.forRoot(routes_config_1.RouteConfig),
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            menu_component_1.MenuComponent,
            menuitems_component_1.MenuItemsComponent,
            ordersummary_component_1.OrderSummaryComponent,
            login_component_1.LoginComponent,
            error404_component_1.PageNotFoundComponent
        ],
        providers: [
            menu_service_1.MenuService,
            menuitem_1.MenuItem,
            menuItems_resolver_service_1.MenuItemsResolver
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
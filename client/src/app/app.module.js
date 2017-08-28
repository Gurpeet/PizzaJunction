"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var http_1 = require("@angular/common/http");
var core_2 = require("@agm/core");
var animations_1 = require("@angular/platform-browser/animations");
// Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./shared/components/header/header.component");
var footer_component_1 = require("./shared/components/footer/footer.component");
var home_component_1 = require("./home/home.component");
var error404_component_1 = require("./error404/error404.component");
// Services
var menu_service_1 = require("./shared/services/menu.service");
var storage_service_1 = require("./shared/services/storage.service");
var jwt_service_1 = require("./shared/services/jwt.service");
// Models
// Routing
var routes_config_1 = require("./routes/routes.config");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            ngx_bootstrap_1.CarouselModule.forRoot(),
            router_1.RouterModule.forRoot(routes_config_1.RouteConfig),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDQVCEwiDngg-HOyOD8-TskXQywkmCi-Rw'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            error404_component_1.PageNotFoundComponent
        ],
        providers: [
            menu_service_1.MenuService,
            storage_service_1.StorageService,
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: jwt_service_1.JWTService,
                multi: true
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
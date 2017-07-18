"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var storage_service_1 = require("./../shared/services/storage.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var HomeComponent = (function () {
    function HomeComponent(router, storageService) {
        this.router = router;
        this.storageService = storageService;
        this.goToMenu = function () {
            if (this.storageService.read('deliveryAddress')) {
                this.router.navigate(['menu']);
            }
            else {
                this.router.navigate(['delivery-address']);
            }
        };
    }
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: './home.component.html',
        providers: [{ provide: ngx_bootstrap_1.CarouselConfig, useValue: { interval: 2000, noPause: true } }],
        styles: ["\n        carousel-size {width: 1070px;height:350px}\n    "]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router, storage_service_1.StorageService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
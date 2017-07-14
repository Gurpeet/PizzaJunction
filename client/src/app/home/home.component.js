"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
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
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: './home.component.html',
        providers: [{ provide: ngx_bootstrap_1.CarouselConfig, useValue: { interval: 2000, noPause: true } }],
        styles: ["\n        carousel-size {width: 1070px;height:350px}\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router, storage_service_1.StorageService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
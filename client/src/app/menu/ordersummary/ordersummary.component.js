"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var storage_service_1 = require("./../../shared/services/storage.service");
var global_1 = require("./../../shared/components/globals/global");
var router_1 = require("@angular/router");
var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(storageService, globals, router) {
        this.storageService = storageService;
        this.globals = globals;
        this.router = router;
        this.deliveryFee = 0;
        this.order_Type = 0;
        this.clearCart = function () {
            this.storageService.removeItem('cartItems');
            this.cartDetails = {};
            this.gstCharges = 0;
            this.deliveryFee = 0;
        };
        this.checkout = function () {
            // if order_Type is 0 then get delivery address, else proceed to checkout
            if (this.order_Type !== 0) {
                this.router.navigate(['/menu/checkout']);
            }
            else {
                this.router.navigate(['delivery-address', global_1.orderType.Delivery]);
            }
        };
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        this.cartDetails = this.storageService.read('cartItems');
        var deliveryAdd = this.storageService.read('deliveryAddress');
        if (deliveryAdd) {
            this.deliveryFee = deliveryAdd.DeliveryFee;
            this.order_Type = deliveryAdd.OrderType;
        }
    };
    ;
    return OrderSummaryComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], OrderSummaryComponent.prototype, "cartDetails", void 0);
OrderSummaryComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'order-summary',
        templateUrl: './ordersummary.component.html',
        styles: ["\n        #divClearCart { cursor: pointer; }\n    "]
    }),
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService,
        global_1.Globals,
        router_1.Router])
], OrderSummaryComponent);
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=ordersummary.component.js.map
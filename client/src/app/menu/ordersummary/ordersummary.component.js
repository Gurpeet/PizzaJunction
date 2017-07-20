"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var storage_service_1 = require("./../../shared/services/storage.service");
var global_1 = require("./../../shared/components/globals/global");
var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(storageService, globals) {
        this.storageService = storageService;
        this.globals = globals;
        this.deliveryFee = 0;
        this.clearCart = function () {
            this.storageService.removeItem('cartItems');
            this.cartDetails = {};
            this.gstCharges = 0;
            this.deliveryFee = 0;
        };
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        this.cartDetails = this.storageService.read('cartItems');
        var deliveryAdd = this.storageService.read('deliveryAddress');
        this.deliveryFee = deliveryAdd.DeliveryFee;
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
    tslib_1.__metadata("design:paramtypes", [storage_service_1.StorageService, global_1.Globals])
], OrderSummaryComponent);
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=ordersummary.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var address_service_1 = require("./../shared/services/address.service");
var DeliveryAddressResolver = (function () {
    function DeliveryAddressResolver(addressService) {
        this.addressService = addressService;
    }
    DeliveryAddressResolver.prototype.resolve = function () {
        return this.addressService.getStates().map(function (items) { return items; });
    };
    return DeliveryAddressResolver;
}());
DeliveryAddressResolver = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [address_service_1.AddressService])
], DeliveryAddressResolver);
exports.DeliveryAddressResolver = DeliveryAddressResolver;
//# sourceMappingURL=delivery-address.resolver.js.map
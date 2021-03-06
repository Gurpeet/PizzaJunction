'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPath = 'http://localhost:5000/api/';
exports.store_order_notification_key = '4fe7ae81-72c9-465a-afa2-bf23d17292bc';
exports.store_client_litening_channel_key = 'bd375792-8b90-41c3-817d-171b776833ac';
exports.pizzaJunctionLat = 49.054765;
exports.pizzaJunctionLng = -122.325902;
exports.defaultStateId = 1;
exports.defaultState = 'British Columbia';
exports.defaultCountry = 'Canada';
exports.orderType = { 'Delivery': 1, 'Pickup': 2 };
exports.paymentMode = { 'PayNow': 1, 'PayInStore': 2, 'CashOnDelivery': 3 };
exports.orderStatus = { 'InProcess': 1, 'Complete': 2, 'Received': 3, 'Rejected': 4, 'All': -1, 'Today': -2 };
exports.minOrderAmount = 15;
exports.discountPercent = 0; // discout will be in percent
var GSTAmount = 5;
var Globals = (function () {
    function Globals() {
        this.generateArray = function (menuItems) {
            var arr = [];
            if (menuItems) {
                Object.keys(menuItems.items).map(function (id) { return arr.push(menuItems.items[id]); });
            }
            return arr;
        };
        this.getTotalAmount = function (cartDetails, deliveryFee) {
            if (!cartDetails) {
                return 0;
            }
            ;
            return ((cartDetails.totalPrice + deliveryFee + (GSTAmount * cartDetails.totalPrice / 100)) ?
                (cartDetails.totalPrice + deliveryFee + (GSTAmount * cartDetails.totalPrice / 100)) : 0);
        };
        this.getDiscountedAmount = function (totalAmount) {
            return (totalAmount * exports.discountPercent / 100);
        };
        this.getGSTCalculation = function (cartDetails) {
            return ((GSTAmount * cartDetails.totalPrice / 100) ?
                (GSTAmount * cartDetails.totalPrice / 100) : 0);
        };
        this.getNetPayable = function (totalAmount) {
            return (totalAmount - this.getDiscountedAmount(totalAmount));
        };
    }
    Globals.prototype.getGSTAmount = function () {
        return GSTAmount;
    };
    ;
    Globals.prototype.getDistanceFee = function (distance) {
        if (distance <= 5) {
            return 5;
        }
        else if (distance < 10) {
            return 8;
        }
        else if (distance < 15) {
            return 12;
        }
        else if (distance <= 30) {
            return 15;
        }
        else {
            return -1;
        }
    };
    ;
    Globals.prototype.parseToJSON = function (val) {
        return JSON.parse(val);
    };
    ;
    Globals.prototype.getPaymentMode = function (mode) {
        var modeStr = '';
        switch (mode) {
            case exports.paymentMode.CashOnDelivery:
                modeStr = 'Cash On Delivery';
                break;
            case exports.paymentMode.PayInStore:
                modeStr = 'Pay In Store';
                break;
            case exports.paymentMode.PayNow:
                modeStr = 'Pay Now';
                break;
        }
        return modeStr;
    };
    ;
    return Globals;
}());
exports.Globals = Globals;
//# sourceMappingURL=global.js.map
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
exports.minOrderAmount = 15;
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
    return Globals;
}());
exports.Globals = Globals;
//# sourceMappingURL=global.js.map
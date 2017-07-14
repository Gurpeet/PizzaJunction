'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPath = 'http://localhost:5000/api/';
exports.store_order_notification_key = '4fe7ae81-72c9-465a-afa2-bf23d17292bc';
exports.store_client_litening_channel_key = 'bd375792-8b90-41c3-817d-171b776833ac';
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
    return Globals;
}());
exports.Globals = Globals;
//# sourceMappingURL=global.js.map
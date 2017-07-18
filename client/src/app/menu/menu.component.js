"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
        this.onCartChange = function (cartItem) {
            this.cartItem = cartItem;
        };
    }
    return MenuComponent;
}());
MenuComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: './menu.component.html'
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map
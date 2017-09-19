"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(route) {
        this.route = route;
        this.onCartChange = function (cartItem) {
            this.cartItem = cartItem;
        };
        this.onEditItem = function (item) {
            this.menuItems.editTopping(item);
        };
    }
    ;
    MenuComponent.prototype.ngOnInit = function () {
        this.itemTypes = this.route.snapshot.data['itemTypes'].GetItemTypes.filter(function (item) { return item.ItemTypeId !== 5; });
    };
    ;
    MenuComponent.prototype.triggerScrollTo = function ($event, targetCategory) {
        this.menuItems.triggerScrollTo($event, targetCategory);
    };
    ;
    return MenuComponent;
}());
tslib_1.__decorate([
    core_1.ViewChild('menuItems'),
    tslib_1.__metadata("design:type", Object)
], MenuComponent.prototype, "menuItems", void 0);
MenuComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: './menu.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var storage_service_1 = require("./../../shared/services/storage.service");
var MenuItemsComponent = (function () {
    function MenuItemsComponent(route, storageService) {
        this.route = route;
        this.storageService = storageService;
        this.groupBy = function (xs, key) {
            var objItems = xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
            return Object.keys(objItems).map(function (k) { return objItems[k]; });
        };
        this.addToCart = function (item) {
            var cartItem = this.storageService.read('cartItems');
            if (!cartItem) {
                cartItem = { items: {}, totalQty: 0, totalPrice: 0 };
            }
            var items = cartItem.items;
            var storedItem = items[item.MenuItemId];
            if (!storedItem) {
                storedItem = items[item.MenuItemId] = { item: item, qty: 0, price: 0 };
            }
            storedItem.qty++;
            storedItem.price = storedItem.item.ItemPrice * storedItem.qty;
            cartItem.totalQty++;
            cartItem.totalPrice += storedItem.item.ItemPrice;
            cartItem.items = items;
            this.storageService.write('cartItems', cartItem);
            this.cartChanged.emit(cartItem);
        };
        this.cartChanged = new core_1.EventEmitter();
    }
    ;
    MenuItemsComponent.prototype.ngOnInit = function () {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemId');
    };
    ;
    return MenuItemsComponent;
}());
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], MenuItemsComponent.prototype, "cartChanged", void 0);
MenuItemsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'menu-items',
        templateUrl: './menuitems.component.html',
        providers: [storage_service_1.StorageService]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, storage_service_1.StorageService])
], MenuItemsComponent);
exports.MenuItemsComponent = MenuItemsComponent;
//# sourceMappingURL=menuitems.component.js.map
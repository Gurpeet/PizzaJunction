"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var storage_service_1 = require("./../../shared/services/storage.service");
var ngx_scroll_to_1 = require("@nicky-lenaers/ngx-scroll-to");
var menu_service_1 = require("./../../shared/services/menu.service");
var MenuItemsComponent = (function () {
    function MenuItemsComponent(route, storageService, _scrollToService, menuService) {
        this.route = route;
        this.storageService = storageService;
        this._scrollToService = _scrollToService;
        this.menuService = menuService;
        this.groupBy = function (xs, key) {
            if (xs) {
                var objItems_1 = xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
                return Object.keys(objItems_1).map(function (k) { return objItems_1[k]; });
            }
            else {
                return xs;
            }
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
        this.openToppings = function (numberOfToppings) {
            // get toppings
            // Hardcoding ToppingId for now
            this.menuService.getItemsById(5)
                .map(function (items) { return items; })
                .subscribe(function (result) { return console.log(result); });
            // Open popup with toppings
        };
        this.cartChanged = new core_1.EventEmitter();
    }
    ;
    MenuItemsComponent.prototype.ngOnInit = function () {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemId');
        this.itemTypes = this.route.snapshot.data['itemTypes'].GetItemTypes;
    };
    ;
    MenuItemsComponent.prototype.triggerScrollTo = function ($event, targetCategory) {
        var config = {
            target: targetCategory.toString()
        };
        this._scrollToService.scrollTo($event, config);
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
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
        storage_service_1.StorageService,
        ngx_scroll_to_1.ScrollToService,
        menu_service_1.MenuService])
], MenuItemsComponent);
exports.MenuItemsComponent = MenuItemsComponent;
//# sourceMappingURL=menuitems.component.js.map
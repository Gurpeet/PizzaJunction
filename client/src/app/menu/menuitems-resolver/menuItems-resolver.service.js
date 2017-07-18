"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var menu_service_1 = require("./../../shared/services/menu.service");
var MenuItemsResolver = (function () {
    function MenuItemsResolver(menuService) {
        this.menuService = menuService;
    }
    MenuItemsResolver.prototype.resolve = function () {
        return this.menuService.getMenuItems().map(function (items) { return items; });
    };
    return MenuItemsResolver;
}());
MenuItemsResolver = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuItemsResolver);
exports.MenuItemsResolver = MenuItemsResolver;
//# sourceMappingURL=menuItems-resolver.service.js.map
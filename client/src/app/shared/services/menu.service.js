"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var global_1 = require("./../components/globals/global");
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        // to get id from route/url
        // private route: ActivatedRoute
        // this.route.snapshot.params['id'];
        // [routerLink]="['/path', param]"
    }
    MenuService.prototype.getMenuItems = function () {
        return this.http.get(global_1.apiPath + 'MenuItems/getMenuItems')
            .catch(this.errorMethod);
    };
    MenuService.prototype.errorMethod = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error || 'Server Error');
    };
    return MenuService;
}());
MenuService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map
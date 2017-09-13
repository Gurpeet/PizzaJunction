"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        return items.filter(function (item) { return item.some(function (f) { return f[field] == value; }); });
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'searchfilter'
    }),
    core_1.Injectable()
], SearchFilterPipe);
exports.SearchFilterPipe = SearchFilterPipe;
//# sourceMappingURL=text-search.pipe.js.map
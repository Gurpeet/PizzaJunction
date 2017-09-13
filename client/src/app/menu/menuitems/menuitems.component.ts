import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, CartItem, ItemType } from './../../shared/models/menuitem';
import { StorageService } from './../../shared/services/storage.service';
import { ScrollToService, ScrollToConfig } from '@nicky-lenaers/ngx-scroll-to';
import { MenuService } from './../../shared/services/menu.service';

@Component({
    selector: 'menu-items',
    templateUrl: './menuitems.component.html',
    providers: [StorageService]
})
export class MenuItemsComponent implements OnInit {
    private menuItems: MenuItem[];
    private itemTypes: ItemType[];
    @Output() cartChanged: EventEmitter<CartItem>;

    constructor(private route: ActivatedRoute,
        private storageService: StorageService,
        private _scrollToService: ScrollToService,
        private menuService: MenuService) {
        this.cartChanged = new EventEmitter<CartItem>();
    };

    ngOnInit() {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemId');
        this.itemTypes = this.route.snapshot.data['itemTypes'].GetItemTypes;
    };

    groupBy = function (xs: MenuItem[], key: string): MenuItem[] {
        if (xs) {
            let objItems = xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
            return Object.keys(objItems).map((k) => objItems[k]);
        } else {
            return xs;
        }
    };

    addToCart = function (item: MenuItem) {
        let cartItem = this.storageService.read('cartItems');
        if (!cartItem) {
            cartItem = { items: {}, totalQty: 0, totalPrice: 0 };
        }
        let items = cartItem.items;
        let storedItem = items[item.MenuItemId];
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

    openToppings = function (numberOfToppings: number) {
        // get toppings
        // Hardcoding ToppingId for now
        this.menuService.getItemsById(5)
                            .map(items => items)
                            .subscribe(result => console.log(result));
        // Open popup with toppings
    };

    public triggerScrollTo($event: Event, targetCategory: String) {
        const config: ScrollToConfig = {
            target: targetCategory.toString()
        };
        this._scrollToService.scrollTo($event, config);
    };
}

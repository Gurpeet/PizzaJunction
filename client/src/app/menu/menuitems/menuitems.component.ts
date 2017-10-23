import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, CartItem, ItemType } from './../../shared/models/menuitem';
import { StorageService } from './../../shared/services/storage.service';
import { ScrollToService, ScrollToConfig } from '@nicky-lenaers/ngx-scroll-to';
import { MenuService } from './../../shared/services/menu.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'menu-items',
    templateUrl: './menuitems.component.html',
    providers: [StorageService]
})
export class MenuItemsComponent implements OnInit {
    private menuItems: MenuItem[];
    private itemTypes: ItemType[];
    private toppingsList: MenuItem[];
    private numberOfTopping: number;
    public modalRef: BsModalRef;
    private selectedToppings: MenuItem[];
    private menuItem: MenuItem;
    private cartId: number;
    private isEditToppings: boolean = false;

    @Input() editToppings: MenuItem;
    @Output() cartChanged: EventEmitter<CartItem>;
    @ViewChild('toppingsModal') toppingsModel: any;

    constructor(private route: ActivatedRoute,
        private storageService: StorageService,
        private scrollToService: ScrollToService,
        private menuService: MenuService,
        private modalService: BsModalService) {
        this.cartChanged = new EventEmitter<CartItem>();
    };

    ngOnInit() {
        this.menuItems = this.groupBy(this.route.snapshot.data['menuItems'].GetMenuItems, 'ItemId');
        this.itemTypes = this.route.snapshot.data['itemTypes'].GetItemTypes.filter((item: any) => item.ItemTypeId !== 5);
        this.selectedToppings = [];
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
            cartItem = { items: {}, totalQty: 0, totalPrice: 0, toppings: [] };
        }
        let items = cartItem.items;
        let storedItem = items[item.MenuItemId];
        if (!storedItem) {
            storedItem = items[item.MenuItemId] = { item: item, qty: 0, price: 0, cartId: this.cartId };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.ItemPrice * storedItem.qty;
        cartItem.totalQty++;
        cartItem.totalPrice += storedItem.item.ItemPrice;
        cartItem.items = items;
        this.storageService.write('cartItems', cartItem);
        this.cartChanged.emit(cartItem);
    };

    openToppings = function (item: MenuItem, resetToppings: boolean) {
        this.menuItem = item;
        this.titleToppings = item.ItemTitle;
        this.numberOfToppings = item.NumberOfToppings;
        if (resetToppings) {
            this.selectedToppings = [];
        }
        // get toppings
        if (!this.toppingsList) {
            this.menuService.getItemsById(5)        // Hardcoding ToppingId for now
                .map((items: any) => items)
                .subscribe((result: any) => {
                    // Open popup with toppings
                    this.toppingsList = result.GetMenuItems;
                    this.openModel();
                });
        } else {
            // Open popup with toppings
            this.openModel();
        }
    };

    openModel = function (template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(this.toppingsModel);
    };

    addTopping = function (item: MenuItem) {
        this.selectedToppings.push(item);
    };

    removeTopping = function (item: MenuItem) {
        const index = this.selectedToppings.indexOf(item);
        if (index !== -1) {
            this.selectedToppings.splice(index, 1);
        }
    };

    addToCartWithToppings = function () {
        this.menuItem.toppings = this.selectedToppings;
        this.addToCart(this.menuItem);
        this.menuItem = [];
        this.selectedToppings = [];
        this.modalRef.hide();
    };

    public triggerScrollTo($event: Event, targetCategory: String) {
        const config: ScrollToConfig = {
            target: targetCategory.toString()
        };
        this.scrollToService.scrollTo($event, config);
    };

    public editTopping(item: MenuItem) {
        // Open popup, set toppings
        this.isEditToppings = true;
        this.selectedToppings = item.toppings;
        this.openToppings(item, false);
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Address } from './../../shared/models/address.model';
import {
    Globals,
    orderType,
    paymentMode,
    minOrderAmount,
    discountPercent
} from './../../shared/components/globals/global';
import { MenuItem } from './../../shared/models/menuitem';
import { MenuService } from './../../shared/services/menu.service';
import { Router } from '@angular/router';

@Component({
    selector: 'order-summary',
    templateUrl: './ordersummary.component.html',
    styles: [`
        .pointer { cursor: pointer; }
    `]
})
export class OrderSummaryComponent implements OnInit {
    @Input() cartDetails: CartItem;
    private deliveryFee: number = 0;
    private order_Type: number = 0;
    private min_Order: number = minOrderAmount;
    private discount_Percent: number = discountPercent;
    deliveryAdd: any;
    order_Types: any = orderType;
    payment_Mode: any = paymentMode;
    constructor(private storageService: StorageService,
        private globals: Globals,
        private router: Router,
        private menuService: MenuService) {
    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        this.deliveryAdd = <Address>this.storageService.read('deliveryAddress');
        if (this.deliveryAdd) {
            this.deliveryFee = this.deliveryAdd.DeliveryFee;
            this.order_Type = this.deliveryAdd.OrderType;
        }
    };

    clearCart = function () {
        this.storageService.removeItem('cartItems');
        this.cartDetails = {};
        this.gstCharges = 0;
        this.deliveryFee = 0;
    };

    checkout = function () {
        // if order_Type is 0 then get delivery address, else proceed to checkout
        if (this.order_Type !== 0) {
            this.router.navigate(['/menu/checkout']);
        } else {
            this.router.navigate(['delivery-address', orderType.Delivery]);
        }
    };

    reduceByOne = function (itemId: number) {
        let items = this.cartDetails.items;
        items[itemId].qty--;
        items[itemId].price -= items[itemId].item.ItemPrice;
        this.cartDetails.totalQty--;
        this.cartDetails.totalPrice -= items[itemId].item.ItemPrice;
        if (items[itemId].qty <= 0) {
            delete this.cartDetails.items[itemId];
        }
        this.storageService.write('cartItems', this.cartDetails);
    };

    removeItem = function (itemId: number) {
        let items = this.cartDetails.items;
        this.cartDetails.totalPrice -= items[itemId].price;
        this.cartDetails.totalQty -= items[itemId].qty;
        delete this.cartDetails.items[itemId];
        this.storageService.write('cartItems', this.cartDetails);
    };

    addToppins = function (id: number) {
        this.menuService.getItemsById(id).subscribe(items => { console.log(items) });
    }
}

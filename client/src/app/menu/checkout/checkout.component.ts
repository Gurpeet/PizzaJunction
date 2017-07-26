import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Globals, orderType, discountPercent } from './../../shared/components/globals/global';
import { Address } from './../../shared/models/address.model';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    private cartDetails: CartItem;
    private deliveryAddress: Address;
    private deliveryFee: number = 0;
    discount_Percent: number = discountPercent;
    address: any = {};
    order_Type: any;
    constructor(private storageService: StorageService, private globals: Globals) {

    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        this.deliveryAddress = <Address>this.storageService.read('deliveryAddress');
        if (this.deliveryAddress) {
            this.deliveryFee = this.deliveryAddress.DeliveryFee;
            this.order_Type = this.deliveryAddress.OrderType;
        } else {
            this.order_Type = orderType.Delivery;
        }
    }

    populateDeliveryAddress = function () {
        if (this.address.SameAsDelivery) {
            // populate from delivery address
            this.address = this.deliveryAddress;
        } else {
            // clear address controls
            this.address = {
                SameAsDelivery: this.deliveryAddress.SameAsDelivery
            };
        }
    };
}

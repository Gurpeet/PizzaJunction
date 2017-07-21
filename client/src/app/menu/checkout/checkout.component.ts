import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Globals, orderType } from './../../shared/components/globals/global';
import { Address } from './../../shared/models/address.model';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    private cartDetails: CartItem;
    private deliveryAddress: Address;
    private deliveryFee: number = 0;
    private address: any = {};
    private order_Type: any = orderType;
    constructor(private storageService: StorageService, private globals: Globals) {

    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        this.deliveryAddress = <Address>this.storageService.read('deliveryAddress');
        this.deliveryFee = 0;
    }

    populateDeliveryAddress = function () {
        if (this.address.SameAsDelivery) {
            //populate from delivery address
            this.address = this.deliveryAddress;
        } else {
            //clear address controls
        }
    }
}

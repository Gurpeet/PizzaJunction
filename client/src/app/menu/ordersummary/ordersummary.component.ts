import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Address } from './../../shared/models/address.model';
import { Globals } from './../../shared/components/globals/global';

@Component({
    selector: 'order-summary',
    templateUrl: './ordersummary.component.html',
    styles: [`
        #divClearCart { cursor: pointer; }
    `]
})
export class OrderSummaryComponent implements OnInit {
    @Input() cartDetails: CartItem;
    private deliveryFee: number = 0;
    constructor(private storageService: StorageService, private globals: Globals) {
    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        var deliveryAdd = <Address>this.storageService.read('deliveryAddress');
        this.deliveryFee = deliveryAdd.DeliveryFee;
    };

    clearCart = function () {
        this.storageService.removeItem('cartItems');
        this.cartDetails = {};
        this.gstCharges = 0;
        this.deliveryFee = 0;
    };
}

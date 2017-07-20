import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Address } from './../../shared/models/address.model';
import { Globals, orderType } from './../../shared/components/globals/global';
import { Router } from '@angular/router';

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
    private order_Type: number = 0;
    constructor(private storageService: StorageService, 
        private globals: Globals,
        private router: Router) {
    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        let deliveryAdd = <Address>this.storageService.read('deliveryAddress');
        if (deliveryAdd) {
            this.deliveryFee = deliveryAdd.DeliveryFee;
            this.order_Type = deliveryAdd.OrderType;
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
    }
}

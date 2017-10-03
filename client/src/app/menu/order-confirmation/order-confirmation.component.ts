import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../shared/services/storage.service';
import { CartItem } from './../../shared/models/menuitem';
import { Globals, orderType, discountPercent, paymentMode } from './../../shared/components/globals/global';
import { Address } from './../../shared/models/address.model';

@Component({
    templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmation implements OnInit {
    private cartDetails: CartItem;
    private deliveryAddress: Address;
    paymentModes: any = paymentMode;
    discount_Percent: number = discountPercent;
    address: any = {};
    orderNumber: string;
    order_Type: string;
    payment_mode: number = paymentMode.PayNow;

    constructor(private storageService: StorageService, private globals: Globals, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        this.deliveryAddress = <Address>this.storageService.read('deliveryAddress');
        this.orderNumber = 'Dummy001';      // TODO: Change it to order number 
        this.order_Type = this.deliveryAddress ?
                            (this.deliveryAddress.OrderType == orderType.Delivery ? 'Delivery' : 'Pickup') :
                            'Delivery';
    }

 }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../shared/services/storage.service';
import { OrderService } from './../../shared/services/order.service';
import { CartItem, Order } from './../../shared/models/menuitem';
import { Globals, orderType, discountPercent, paymentMode } from './../../shared/components/globals/global';
import { Address } from './../../shared/models/address.model';

@Component({
    templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmation implements OnInit {
    order: Order = {};
    private deliveryAddress: Address;
    paymentModes: any = paymentMode;
    discount_Percent: number = discountPercent;
    address: any = {};
    order_Type: string;
    payment_mode: number = paymentMode.PayNow;

    constructor(private storageService: StorageService,
        private globals: Globals,
        private route: ActivatedRoute,
        private orderService: OrderService) {
    }

    ngOnInit() {
        this.orderService.getOrder(this.route.snapshot.params['id'])
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.order = response.GetOrder[0];
            });
        
        this.deliveryAddress = <Address>this.storageService.read('deliveryAddress');
        this.order_Type = this.deliveryAddress ?
            (this.deliveryAddress.OrderType == orderType.Delivery ? 'Delivery' : 'Pickup') :
            'Delivery';
        if (!this.deliveryAddress) {
            this.deliveryAddress = {};
        }
    }

}

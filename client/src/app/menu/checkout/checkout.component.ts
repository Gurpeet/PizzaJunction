import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from './../../shared/services/storage.service';
import { OrderService } from './../../shared/services/order.service';
import { CartItem } from './../../shared/models/menuitem';
import { Globals, orderType, discountPercent, paymentMode } from './../../shared/components/globals/global';
import { Address } from './../../shared/models/address.model';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    private states: any[];
    private cartDetails: CartItem;
    private deliveryAddress: Address;
    private deliveryFee: number = 0;
    paymentModes: any = paymentMode;
    discount_Percent: number = discountPercent;
    address: any = {};
    order_Type: number;
    payment_mode: number = paymentMode.PayNow;
    constructor(private storageService: StorageService,
        private globals: Globals,
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrderService) {

    }

    ngOnInit() {
        this.states = this.route.snapshot.data['states'].GetStates;
        this.cartDetails = <CartItem>this.storageService.read('cartItems');
        this.deliveryAddress = <Address>this.storageService.read('deliveryAddress');
        this.payment_mode = this.deliveryAddress.OrderType;     // TODO: change this to payment mode
        this.address = {
            Name: this.deliveryAddress.Name,
            Phone: this.deliveryAddress.Phone
        };
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
                SameAsDelivery: this.deliveryAddress.SameAsDelivery,
                Name: this.deliveryAddress.Name,
                Phone: this.deliveryAddress.Phone
            };
        }
    };

    placeOrder = function () {
        // Save Order and redirect
        // Create order object and send for save
        let order = {
            UserId: 0,       //Dummy for now
            DeliveryModeId: this.order_Type,
            PaymentModeId: this.payment_mode,        // TODO: need to replace after payment integration
            OrderStatusId: 3,       // Hardcoding for now(Recieved)
            OrderDate: new Date(),
            OrderDetails: JSON.stringify(this.cartDetails),
            OrderPrice: this.globals.getTotalAmount(this.cartDetails, this.deliveryFee)
        };

        this.orderService.save(order)
            .map((items: any) => items)
            .subscribe((result: any) => {
                this.storageService.clear();            // Order succesfully placed, clear from local cache
                this.router.navigate(['/menu/confirmation', result.Result[0].OrderId]);
            });
    };
}

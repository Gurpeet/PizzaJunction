import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { Address } from './../../shared/models/address.model';
import { orderType } from './../../shared/components/globals/global';

@Component({
    selector: 'delivery-address',
    templateUrl: './menu-delivery-address.component.html',
    styles: [`
        #divAddAddress { cursor: pointer; }
    `]
})
export class MenuDeliveryAddressComponent implements OnInit {
    private address: Address;
    private orderTypeId: number;
    order_Type: any = orderType;
    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.address = <Address>this.storageService.read('deliveryAddress');
        if (this.address) {
            this.orderTypeId = this.address.OrderType;
        } else {
            this.orderTypeId = orderType.Delivery;
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../shared/services/storage.service';
import { Address } from './../../shared/models/address.model';


@Component({
    selector: 'delivery-address',
    templateUrl: './menu-delivery-address.component.html',
    styles: [`
        #divAddAddress { cursor: pointer; }
    `]
})
export class MenuDeliveryAddressComponent implements OnInit {
    private address: Address;
    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.address = <Address>this.storageService.read('deliveryAddress');
        console.log(this.address);
    }
}

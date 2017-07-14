import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AddressService } from './../shared/services/address.service';
import { Address } from './../shared/models/address.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeliveryAddressResolver implements Resolve<any> {
    constructor (private addressService: AddressService) {
    }

    resolve(): Observable<Address[]> {
        return this.addressService.getStates().map(items => items);
    }
}

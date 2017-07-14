import { Component, OnInit } from '@angular/core';
import { Address } from './../shared/models/address.model';
import { StorageService } from './../shared/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './delivery-address.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class DeliveryAddress implements OnInit {
    private states: Address[];
    constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.states = this.route.snapshot.data['states'].GetStates;
        console.log(this.states);
    }

    getDeliveryMinTime = function (): Date {
        var minTime = new Date();
        minTime.setMinutes(minTime.getMinutes() + 45);
        return minTime;
    };

    getDeliveryMaxTime = function (): Date {
        var maxTime = new Date();
        maxTime.setHours(20);
        maxTime.setMinutes(16);
        return maxTime;
    };

    address: Address = {
        AddressId: 0,
        DeliveryTime: '',
        Street: '',
        Appartment: '',
        City: '',
        StateId: 1,     // setting default value to be BC- British Columbia
        Zip: ''
    };
    private minMoment: Date = this.getDeliveryMinTime();
    private maxMoment: Date = this.getDeliveryMaxTime();
    searchLocation = function (formAddress: Address) {
        this.storageService.write("deliveryAddress", formAddress);
        this.router.navigate(['menu']);
    };
}

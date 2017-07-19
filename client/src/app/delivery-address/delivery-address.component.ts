import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address, GeoLocation } from './../shared/models/address.model';
import { StorageService } from './../shared/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapService } from './../shared/services/map.service';
import { pizzaJunctionLat, pizzaJunctionLng, defaultStateId, defaultState, defaultCountry } from './../shared/components/globals/global';
import { orderType } from './../shared/components/globals/global';

@Component({
    templateUrl: './delivery-address.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class DeliveryAddress implements OnInit, OnDestroy {
    private states: any[];
    private address: Address;
    private minMoment: Date = this.getDeliveryMinTime();
    private maxMoment: Date = this.getDeliveryMaxTime();
    private order_Type: any = orderType;
    private sub: any;

    constructor(private storageService: StorageService,
        private router: Router,
        private route: ActivatedRoute,
        private mapService: MapService) {
    }

    ngOnInit() {
        this.states = this.route.snapshot.data['states'].GetStates;
        this.address = <Address>this.storageService.read('deliveryAddress');
        let ordTypeId = (this.route.snapshot.params['orderType'] ? this.route.snapshot.params['orderType'] : orderType.Delivery);
        if (!this.address) {
            this.address = {
                AddressId: 0,
                DeliveryTime: null,
                Street: '',
                Appartment: '',
                City: '',
                StateId: defaultStateId,     // setting default value to be BC- British Columbia
                Zip: '',
                Country: defaultCountry,
                State: defaultState,
                Name: '',
                Phone: '',
                OrderType: ordTypeId
            };
        } else {
            this.address.OrderType = ordTypeId;
        }
    };

    getDeliveryMinTime(): Date {
        let minTime = new Date();
        minTime.setMinutes(minTime.getMinutes() + 45);
        return minTime;
    };

    getDeliveryMaxTime(): Date {
        let maxTime = new Date();
        maxTime.setHours(20);
        maxTime.setMinutes(16);
        return maxTime;
    };


    // Location for calculating distance
    // this.location: Address = {
    //     Street: 'King George Hwy',
    //     Appartment: '1160',
    //     City: 'Surrey',
    //     StateId: 1,
    //     State: 'British Columbia',
    //     Country: 'Canada',
    //     Zip: 'V4A4Z2'
    // };
    searchLocation = function (formAddress: Address) {
        this.storageService.write('deliveryAddress', formAddress);
        console.log(formAddress);
        // calculate distance only if oderType is delivery
        if (this.orderTypeId === orderType.Delivery) {
            this.mapService.searchLocation(formAddress).then((geoLocation: GeoLocation) => {
                this.mapService.getDistance({ lat: pizzaJunctionLat, lng: pizzaJunctionLng }, geoLocation).then((distance: number) => {
                    console.log(distance);
                });
            });
        }

        this.router.navigate(['menu']);
    };

    ngOnDestroy() {
        // this.orderType.unsubscribe();
    };
}

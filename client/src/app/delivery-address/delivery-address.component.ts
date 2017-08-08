import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Address, GeoLocation } from './../shared/models/address.model';
import { StorageService } from './../shared/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapService } from './../shared/services/map.service';
import { pizzaJunctionLat, pizzaJunctionLng, defaultStateId, defaultState, defaultCountry } from './../shared/components/globals/global';
import { orderType, paymentMode, Globals } from './../shared/components/globals/global';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    templateUrl: './delivery-address.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class DeliveryAddress implements OnInit, OnDestroy {
    private states: any[];
    private address: Address;
    minMoment: Date = this.getDeliveryMinTime();
    maxMoment: Date = this.getDeliveryMaxTime();
    order_Type: any = orderType;

    constructor(private storageService: StorageService,
        private router: Router,
        private route: ActivatedRoute,
        private mapService: MapService,
        private global: Globals,
        private toastr: ToastsManager,
        vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.states = this.route.snapshot.data['states'].GetStates;
        this.address = <Address>this.storageService.read('deliveryAddress');
        let ordTypeId = (this.route.snapshot.params['orderType'] ? this.route.snapshot.params['orderType'] : orderType.Delivery);
        let isCheckout = (this.route.snapshot.params['isCheckout'] ? this.route.snapshot.params['isCheckout'] : 0);
        console.log(isCheckout);

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
                OrderType: ordTypeId,
                Distance: 0,
                DeliveryFee: 0,
                PaymentMode: paymentMode.PayNow,
                IsCheckout: isCheckout
            };
        } else {
            this.address.OrderType = ordTypeId;
            this.address.IsCheckout = isCheckout;
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
    goNext = function (formAddress: Address) {
        // calculate distance only if oderType is delivery
        if (formAddress.OrderType == orderType.Delivery) {
            this.mapService.searchLocation(formAddress).then((geoLocation: GeoLocation) => {
                this.mapService.getDistance({ lat: pizzaJunctionLat, lng: pizzaJunctionLng }, geoLocation).then((distance: number) => {
                    let distFee = this.global.getDistanceFee(distance);
                    if (distFee !== -1) {
                        formAddress.DeliveryFee = distFee;
                        formAddress.Distance = distance;
                        this.navigateToMenu(formAddress);
                    } else {
                        this.toastr.error('We only deliver with in 30 km radius.', 'Unable to deliver');
                    }
                });
            }).catch((ex: any) => {
                console.log('error: ' + ex);
            });
        } else {
            this.navigateToMenu(formAddress);
        }
    };

    navigateToMenu = function (formAddress: Address) {
        this.storageService.write('deliveryAddress', formAddress);
        console.log(formAddress.IsCheckout);
        if (formAddress.IsCheckout == 1) {
            this.router.navigate(['menu/checkout']);
        } else {
            this.router.navigate(['menu']);
        }
    };

    clearAddress = function () {
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
            Name: this.address.Name,
            Phone: this.address.Phone,
            OrderType: this.address.OrderType,
            Distance: 0,
            DeliveryFee: 0,
            PaymentMode: paymentMode.PayNow,
            IsCheckout: this.address.IsCheckout
        };
    };

    ngOnDestroy() {
        // this.orderType.unsubscribe();
    };
}

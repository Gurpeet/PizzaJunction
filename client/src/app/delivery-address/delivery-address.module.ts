import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeliveryAddress } from './delivery-address.component';
import { DeliveryAddressResolver } from './delivery-address.resolver';
import { AddressService } from './../shared/services/address.service';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { MapService } from './../shared/services/map.service';
import { AgmCoreModule } from '@agm/core';

const addressRoutes: Routes = [{ path: '', component: DeliveryAddress, resolve: {states: DeliveryAddressResolver } }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DateTimePickerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDQVCEwiDngg-HOyOD8-TskXQywkmCi-Rw'
        }),
        RouterModule.forChild(addressRoutes)
    ],
    declarations: [
        DeliveryAddress
    ],
    providers: [
        AddressService,
        DeliveryAddressResolver,
        MapService
    ]
})
export class DeliveryAddressModule { }

import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { GeoLocation, Address } from './../models/address.model';

declare var google: any;

export interface IMap {
    searchLocation: (location: Address) => Promise<GeoLocation>;
    getDistance: (origin: GeoLocation, destination: GeoLocation) => Promise<number>;
}

@Injectable()
export class MapService implements IMap {
    geocoder: any;

    constructor(private mapsApiLoader: MapsAPILoader) {
        this.mapsApiLoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
        });
    }

    public searchLocation(location: Address): Promise<GeoLocation> {
        let geoLocation: GeoLocation;
        const address = `${location.Street} ${location.Appartment} ${location.City} ${location.State} ${location.Country} ${location.Zip}`;

        return new Promise<GeoLocation>((resolve: any, reject: any) => {
            this.geocoder.geocode({ 'address': address }, (results: any, status: any) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    let loc = results[0].geometry.location;
                    resolve(geoLocation = {
                        lat: loc.lat(),
                        lng: loc.lng()
                    });
                } else {
                    let errorMessage;
                    if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                        errorMessage = 'No results found, Please enter correct address.';
                    } else {
                        errorMessage = 'Error! Searching Address, Please try again.';
                    }

                    reject(errorMessage);
                }
            });
        });
    }


    public getDistance(origin: GeoLocation, destination: GeoLocation): Promise<number> {

        let service = new google.maps.DistanceMatrixService;
        return new Promise<number>((resolve: any, reject: any) => {
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC
            }, (results: any, status: any) => {
                if (status === google.maps.DistanceMatrixElementStatus.OK) {
                    let distanceInMeters = results.rows[0].elements[0].distance.value;
                    let distanceInKm = distanceInMeters / 1000;
                    resolve(distanceInKm);
                } else {
                    let errorMessage;
                    if (status === google.maps.DistanceMatrixElementStatus.ZERO_RESULTS) {
                        errorMessage = 'No results found, Please enter correct address.';
                    } else {
                        errorMessage = 'Error! Searching Address, Please try again.';
                    }

                    reject(errorMessage);
                }
            });
        });
    };
}

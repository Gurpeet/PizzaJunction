import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Address } from './../../shared/models/address.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { apiPath } from './../components/globals/global';

@Injectable()
export class AddressService {
    constructor(private http: Http) {
        // to get id from route/url
        // private route: ActivatedRoute
        // this.route.snapshot.params['id'];
        // [routerLink]="['/path', param]"
    }

    getStates(): Observable<Address[]> {
        return this.http.get(apiPath + 'Addresses/getStates')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.errorMethod);
    }

    errorMethod(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }
}

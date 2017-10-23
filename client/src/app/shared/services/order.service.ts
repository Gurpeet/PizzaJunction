import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Order } from './../../shared/models/menuitem';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { apiPath } from './../components/globals/global';

@Injectable()
export class OrderService {
    constructor(private http: HttpClient) {

    }

    getOrders(): Observable<Order[]> {
        return this.http.get(apiPath + 'Orders/getOrders')
            .catch(this.errorMethod);
    };

    save(order: Order): Observable<any> {
        return this.http.post(apiPath + 'Orders/add', { order: order })
            .catch(this.errorMethod);
    };

    acceptOrder(order: Order): any {
        return this.http.put(apiPath + 'Orders/acceptOrder', { order: order })
            .catch(this.errorMethod);
    };

    getOrder(orderId: number): Observable<Order> {
        return this.http.get(apiPath + 'Orders/getOrder?orderId=' + orderId)
            .catch(this.errorMethod);
    };

    errorMethod(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    };
}

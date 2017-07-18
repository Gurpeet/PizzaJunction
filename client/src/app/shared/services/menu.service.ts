import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './../../shared/models/menuitem';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { apiPath } from './../components/globals/global';

@Injectable()
export class MenuService {
    constructor(private http: HttpClient) {
        // to get id from route/url
        // private route: ActivatedRoute
        // this.route.snapshot.params['id'];
        // [routerLink]="['/path', param]"
    }

    getMenuItems(): Observable<MenuItem[]> {
        return this.http.get(apiPath + 'MenuItems/getMenuItems')
            .catch(this.errorMethod);
    }

    errorMethod(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }
}

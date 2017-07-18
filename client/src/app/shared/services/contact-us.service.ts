import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ContactUsModel } from './../../shared/models/contact-us.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { apiPath } from './../components/globals/global';

@Injectable()
export class ContactUsService {
    constructor(private http: HttpClient) {
    }

    add(contactUsModel: ContactUsModel) {
        let bodyString = JSON.stringify(contactUsModel);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // TODO: create a http wrapper to add anything other than body    
        // let options = new RequestOptions({ headers: headers }); // Create a request option
        // console.log(apiPath + 'ContactUs/add');
        return this.http.post(apiPath + 'ContactUs/add', bodyString)
            .catch(this.errorMethod).subscribe();
    }

    errorMethod(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }

}

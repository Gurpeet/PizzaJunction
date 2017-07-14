'use strict';
import { MenuItem } from './../../models/menuitem';

export const apiPath = 'http://localhost:5000/api/';
export const store_order_notification_key = '4fe7ae81-72c9-465a-afa2-bf23d17292bc';
export const store_client_litening_channel_key = 'bd375792-8b90-41c3-817d-171b776833ac';

const GSTAmount = 5;

export class Globals {
    generateArray = function (menuItems: any): MenuItem[] {
        let arr: any[] = [];
        if (menuItems) {
            Object.keys(menuItems.items).map(id => arr.push(menuItems.items[id]));
        }
        return arr;
    };

    getGSTAmount() {
        return GSTAmount;
    };
}

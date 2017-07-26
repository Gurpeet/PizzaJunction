'use strict';
import { MenuItem } from './../../models/menuitem';

export const apiPath = 'http://localhost:5000/api/';
export const store_order_notification_key = '4fe7ae81-72c9-465a-afa2-bf23d17292bc';
export const store_client_litening_channel_key = 'bd375792-8b90-41c3-817d-171b776833ac';
export const pizzaJunctionLat = 49.054765;
export const pizzaJunctionLng = -122.325902;
export const defaultStateId = 1;
export const defaultState = 'British Columbia';
export const defaultCountry = 'Canada';
export const orderType = { 'Delivery': 1, 'Pickup': 2 };
export const paymentMode = { 'PayNow': 1, 'PayInStore': 2, 'CashOnDelivery': 3};
export const minOrderAmount = 15;
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

    getDistanceFee(distance: number): number {
        if (distance <= 5) {
            return 5;
        } else if (distance < 10) {
            return 8;
        } else if (distance < 15) {
            return 12;
        } else if (distance <= 30) {
            return 15;
        } else {
            return -1;
        }
    };
}

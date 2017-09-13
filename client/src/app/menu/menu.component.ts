import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem, ItemType } from './../shared/models/menuitem';

@Component({
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    cartItem: CartItem;
    itemTypes: ItemType[];

    @ViewChild('menuItems') menuItems: any;

    constructor(private route: ActivatedRoute) {
    };

    ngOnInit() {
        this.itemTypes = this.route.snapshot.data['itemTypes'].GetItemTypes;
    };

    onCartChange = function (cartItem: CartItem) {
        this.cartItem = cartItem;
    };

    public triggerScrollTo($event: Event, targetCategory: String) {
        this.menuItems.triggerScrollTo($event, targetCategory);
    }
}

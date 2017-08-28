import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MenuService } from './../../shared/services/menu.service';
import { ItemType } from './../../shared/models/menuitem';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemTypeResolver implements Resolve<any> {
    constructor (private menuService: MenuService) {
    }

    resolve(): Observable<ItemType[]> {
        return this.menuService.getItemTypes().map(items => items);
    }
}

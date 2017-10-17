import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared/services/order.service';
import { Order } from './../../shared/models/menuitem';
import { DataTableModule, SharedModule } from 'primeng/primeng';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
    private ordersList: Order[];
    constructor(private orderService: OrderService) {

    }

    ngOnInit() {
        this.orderService.getOrders()
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.ordersList = response.GetOrders;
                console.log(this.ordersList);
            });
    }

    acceptOrder(order: Order){
        console.log(order);
    }

    rejectOrder(order: Order){
        console.log(order);
    }

    parseToJSON(val: string){
        return JSON.parse(val);
    }
}

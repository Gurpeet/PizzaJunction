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
        this.getAllOrders();
    };

    getAllOrders(){
        this.orderService.getOrders()
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.ordersList = response.GetOrders;
            });
    };
    // InProcess = 1
    // Complete = 2
    // Received = 3
    // Rejected = 4
    acceptOrder(order: Order) {
        order.OrderStatus = 1;
        this.updateOrder(order);
    };

    rejectOrder(order: Order) {
        order.OrderStatus = 4;
        this.updateOrder(order);
    };

    completeOrder(order: Order) {
        order.OrderStatus = 2;
        this.updateOrder(order);
    }

    updateOrder(order: Order) {
        this.orderService.acceptOrder(order)
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.getAllOrders();
            });
    };

    parseToJSON(val: string) {
        return JSON.parse(val);
    }
}

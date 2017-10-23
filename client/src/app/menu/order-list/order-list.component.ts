import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared/services/order.service';
import { Order } from './../../shared/models/menuitem';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
    private ordersList: Order[];
    private ordersListCopy: Order[];
    orderStatus: number;

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.getAllOrders();
        this.orderStatus = '5';     // It is not taking numeric, verify and fix later
    };

    getAllOrders() {
        this.orderService.getOrders()
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.ordersList = this.ordersListCopy = response.GetOrders;
            });
    };
    // InProcess = 1
    // Complete = 2
    // Received = 3
    // Rejected = 4
    acceptOrder(order: Order) {
        order.OrderStatusId = 1;
        this.updateOrder(order);
    };

    rejectOrder(order: Order) {
        order.OrderStatusId = 4;
        this.updateOrder(order);
    };

    completeOrder(order: Order) {
        order.OrderStatusId = 2;
        this.updateOrder(order);
    }

    updateOrder(order: Order) {
        this.orderService.acceptOrder(order)
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.getAllOrders();
            });
    };

    filterOrders() {
        if (this.orderStatus == -1) {
            this.ordersList = this.ordersListCopy;
        } else {
            this.ordersList = this.ordersListCopy.filter(i => i.OrderStatusId == this.orderStatus);
        }
    };

    parseToJSON(val: string) {
        return JSON.parse(val);
    }
}

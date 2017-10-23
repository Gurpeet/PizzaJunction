import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared/services/order.service';
import { Order } from './../../shared/models/menuitem';
import { Globals, orderStatus } from './../../shared/components/globals/global';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
    private ordersList: Order[];
    private ordersListCopy: Order[];
    orderFilter: number;

    constructor(private orderService: OrderService, private globals: Globals) {
    }

    ngOnInit() {
        this.getAllOrders();
        this.orderFilter = orderStatus.All.toString();     // It is not taking numeric, verify and fix later
    };

    getAllOrders() {
        this.orderService.getOrders()
            .map((items: any) => items)
            .subscribe((response: any) => {
                this.ordersList = this.ordersListCopy = response.GetOrders;
            });
    };
    
    acceptOrder(order: Order) {
        order.OrderStatusId = orderStatus.InProcess;
        this.updateOrder(order);
    };

    rejectOrder(order: Order) {
        order.OrderStatusId = orderStatus.Rejected;
        this.updateOrder(order);
    };

    completeOrder(order: Order) {
        order.OrderStatusId = orderStatus.Complete;
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
        if (this.orderFilter == orderStatus.All) {
            this.ordersList = this.ordersListCopy;
        } else {
            this.ordersList = this.ordersListCopy.filter(i => i.OrderStatusId == this.orderFilter);
        }
    };

    
}

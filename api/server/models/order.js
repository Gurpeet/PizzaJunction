'use strict';

module.exports = function (Order) {

    Order.getOrder = function(orderId, cb){
        var ds = Order.dataSource;
        var sql = "EXEC [dbo].[GetOrder] @OrderId = " + orderId;  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };
    Order.remoteMethod('getOrder', {
        accepts: { arg: 'orderId', type: 'number' },
        http: { path: '/getOrder', verb: 'get' },
        returns: { arg: 'GetOrder', type: 'string' }
    });


    Order.getOrders = function (cb) {
        var ds = Order.dataSource;
        var sql = "EXEC [dbo].[GetOrders]";  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Order.remoteMethod('getOrders', {
        http: { path: '/getOrders', verb: 'get' },
        returns: { arg: 'GetOrders', type: 'string' }
    });

    Order.add = function (order, cb) {
        var ds = Order.dataSource;
        //Code to save address
        var sql = "EXEC [dbo].[AddOrder] @UserId = " + parseInt(order.UserId) +
            ", @DeliveryModeId = " + parseInt(order.DeliveryModeId) +
            ", @PaymentModeId  = " + parseInt(order.PaymentModeId) +
            ", @OrderStatusId  = " + parseInt(order.OrderStatusId) +
            ", @OrderDate = '" + order.OrderDate +
            "', @OrderDetails = '" + JSON.stringify(order.OrderDetails) +
            "', @OrderPrice = '" + order.OrderPrice + "'";

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Order.remoteMethod('add', {
        accepts: { arg: 'order', type: 'object' },
        http: { path: '/add', verb: 'post' },
        returns: { arg: 'Result', type: 'string' }
    });

    Order.acceptOrder = function (order, cb) {
        var ds = Order.dataSource;
        //Code to save address
        var sql = "EXEC [dbo].[AcceptOrder] @OrderId = '" + order.orderId +
            "', @OrderStatusId = '" + order.orderStatusId + "'";

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Order.remoteMethod('acceptOrder', {
        accepts: { arg: 'order', type: 'object' },
        http: { path: '/acceptOrder', verb: 'put' },
        returns: { arg: 'Result', type: 'string' }
    });


    //Hides all unnecessary endpoints
    Order.disableRemoteMethodByName('create');				// Removes (POST) 
    Order.disableRemoteMethodByName('patchOrCreate');				// Removes (PATCH) 
    Order.disableRemoteMethodByName('prototype.patchAttributes');    // Removes (PATCH)
    Order.disableRemoteMethodByName('find');				// Removes (GET) 
    Order.disableRemoteMethodByName('findById');				// Removes (GET) 
    Order.disableRemoteMethodByName('deleteById');			// Removes (DELETE)
    Order.disableRemoteMethodByName("updateAll");				// Removes (POST)
    Order.disableRemoteMethodByName("updateAttributes");		// Removes (PUT) 
    Order.disableRemoteMethodByName('createChangeStream');	// removes (GET|POST)    
    Order.disableRemoteMethodByName('replaceById');
    Order.disableRemoteMethodByName('upsertWithWhere');
    Order.disableRemoteMethodByName('replaceOrCreate');
    Order.disableRemoteMethodByName('findOne');
    Order.disableRemoteMethodByName('count');
    Order.disableRemoteMethodByName('exists');
}
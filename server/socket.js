var socketio = require('socket.io');

module.exports.listen = function(server){
    io = socketio.listen(server);

    io.sockets.on('connection', function (socket) {
        
        socket.on('Connect-to-Store-Server', function(payload) {
            socket.join(payload.store_order_notification_key);
            
            console.log(payload.message);
        });

        socket.on('Notify-Order-to-Store-Server', function (payload) {           
            socket.broadcast.to(payload.store_order_notification_key).emit(payload.store_client_litening_channel_key, payload);
        });
    });

    return io;
}
'use strict';

module.exports = function (Address) {

    Address.add = function (address, cb) {
        //Code to save address
        var sql = "EXEC [dbo].[AddAddress] @street = '" + address.Street +
            "', @appartment = '" + address.Appartment +
            "', @city = '" + address.City +
            "', @stateId = '" + address.StateId +
            "', @zip = '" + address.Zip + "'";

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Address.remoteMethod('add', {
        accepts: { arg: 'address', type: 'object' },
        http: { path: '/add', verb: 'post' },
        returns: { arg: 'Result', type: 'string' }
    });

    Address.get = function (cb) {
        var ds = Menuitem.dataSource;
        var sql = "EXEC [dbo].[GetAddresses] @addressId = 0";  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Address.remoteMethod('get', {
        http: { path: '/get', verb: 'post' },
        returns: { arg: 'Result', type: 'string' }
    });

    Address.getStates = function (cb) {
        var ds = Address.dataSource;
        var sql = "EXEC [dbo].[GetStates]";  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Address.remoteMethod('getStates', {
        http: { path: '/getStates', verb: 'get' },
        returns: { arg: 'GetStates', type: 'string' }
    });

    //Hides all unnecessary endpoints
    Address.disableRemoteMethodByName('create');				// Removes (POST) 
    Address.disableRemoteMethodByName('patchOrCreate');				// Removes (PATCH) 
    Address.disableRemoteMethodByName('prototype.patchAttributes');    // Removes (PATCH)
    Address.disableRemoteMethodByName('find');				// Removes (GET) 
    Address.disableRemoteMethodByName('findById');				// Removes (GET) 
    Address.disableRemoteMethodByName('deleteById');			// Removes (DELETE)
    Address.disableRemoteMethodByName("updateAll");				// Removes (POST)
    Address.disableRemoteMethodByName("updateAttributes");		// Removes (PUT) 
    Address.disableRemoteMethodByName('createChangeStream');	// removes (GET|POST)    
    Address.disableRemoteMethodByName('replaceById');
    Address.disableRemoteMethodByName('upsertWithWhere');
    Address.disableRemoteMethodByName('replaceOrCreate');
    Address.disableRemoteMethodByName('findOne');
    Address.disableRemoteMethodByName('count');
    Address.disableRemoteMethodByName('exists');
};


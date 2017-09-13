'use strict';

module.exports = function (Menuitem) {
    //Hides all unnecessary endpoints
    Menuitem.disableRemoteMethodByName('create');				// Removes (POST) 
    Menuitem.disableRemoteMethodByName('patchOrCreate');				// Removes (PATCH) 
    Menuitem.disableRemoteMethodByName('prototype.patchAttributes');    // Removes (PATCH)
    Menuitem.disableRemoteMethodByName('find');				// Removes (GET) 
    Menuitem.disableRemoteMethodByName('findById');				// Removes (GET) 
    Menuitem.disableRemoteMethodByName('deleteById');			// Removes (DELETE)
    Menuitem.disableRemoteMethodByName("updateAll");				// Removes (POST)
    Menuitem.disableRemoteMethodByName("updateAttributes");		// Removes (PUT) 
    Menuitem.disableRemoteMethodByName('createChangeStream');	// removes (GET|POST)    
    Menuitem.disableRemoteMethodByName('replaceById');
    Menuitem.disableRemoteMethodByName('upsertWithWhere');
    Menuitem.disableRemoteMethodByName('replaceOrCreate');
    Menuitem.disableRemoteMethodByName('findOne');
    Menuitem.disableRemoteMethodByName('count');
    Menuitem.disableRemoteMethodByName('exists');

Menuitem.getItemTypes = function (cb) {
        var ds = Menuitem.dataSource;
        var sql = "EXEC [dbo].[GetItemTypes]";  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Menuitem.remoteMethod('getItemTypes', {
        http: { path: '/getItemTypes', verb: 'get' },
        returns: { arg: 'GetItemTypes', type: 'string' }
    });

    Menuitem.getMenuItems = function (cb) {
        var ds = Menuitem.dataSource;
        var sql = "EXEC [dbo].[GetMenuItems] @itemTypeId = 1, @getAll = 1";  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Menuitem.remoteMethod('getMenuItems', {
        http: { path: '/getMenuItems', verb: 'get' },
        returns: { arg: 'GetMenuItems', type: 'string' }
    });

    Menuitem.getItemById = function (id, getAll, cb) {
        var ds = Menuitem.dataSource;
        var sql = "EXEC [dbo].[GetMenuItems] @itemTypeId = " + id + " @getAll = " + getAll;  //Executes sproc

        ds.connector.query(sql, [], function (err, items) {
            if (err) {
                console.error(err);     //handle error
            }
            cb(err, items);
        });
    };

    Menuitem.remoteMethod('getItemById', {
        accepts: {arg: 'id', type: 'string'},
        accepts: {arg: 'getAll', type: 'string'},
        http: { path: '/getItemById', verb: 'get' },
        returns: { arg: 'GetMenuItems', type: 'string' }
    });

};

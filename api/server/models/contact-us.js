'use strict';

module.exports = function (Contactus) {
    Contactus.add = function (contactus, cb) {      // {"Name": "sdf", "Email": "email", "Subject": "subject", "Message": "message"}
        var ds = Contactus.dataSource;
        var sql = "EXEC [dbo].[AddContactUs] @Name = '" + contactus.Name +
            "', @Email = '" + contactus.Email +
            "', @Subject = '" + contactus.Subject +
            "', @Message = '" + contactus.Message + "'";
        //console.log('sql');
        //console.log(app.dataSources.Email);
        // app.models.Email.send({
        //     to: 'gopisivia@gmail.com',
        //     from: contactus.Email,
        //     Subject: contactus.Subject,
        //     text: contactus.Message
        // });
        console.log(sql);
        cb(null, sql);
        // ds.connector.query(sql, [], function (err, items) {
        //     if (err) {
        //         console.error(err);     //handle error
        //     }
        //     cb(err, items);
        // });
    };

    Contactus.remoteMethod('add', {
        accepts: { arg: 'contactus', type: 'object' },
        http: { path: '/add', verb: 'post' },
        returns: { arg: 'Result', type: 'string' }
    });


    //Hides all unnecessary endpoints
    Contactus.disableRemoteMethodByName('create');				// Removes (POST) 
    Contactus.disableRemoteMethodByName('patchOrCreate');				// Removes (PATCH) 
    Contactus.disableRemoteMethodByName('prototype.patchAttributes');    // Removes (PATCH)
    Contactus.disableRemoteMethodByName('find');				// Removes (GET) 
    Contactus.disableRemoteMethodByName('findById');				// Removes (GET) 
    Contactus.disableRemoteMethodByName('deleteById');			// Removes (DELETE)
    Contactus.disableRemoteMethodByName("updateAll");				// Removes (POST)
    Contactus.disableRemoteMethodByName("updateAttributes");		// Removes (PUT) 
    Contactus.disableRemoteMethodByName('createChangeStream');	// removes (GET|POST)    
    Contactus.disableRemoteMethodByName('replaceById');
    Contactus.disableRemoteMethodByName('upsertWithWhere');
    Contactus.disableRemoteMethodByName('replaceOrCreate');
    Contactus.disableRemoteMethodByName('findOne');
    Contactus.disableRemoteMethodByName('count');
    Contactus.disableRemoteMethodByName('exists');
};

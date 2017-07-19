'use strict';

var nodemailer = require('nodemailer');

module.exports = function (Contactus) {
    Contactus.add = function (contactus, cb) {      // {"Name": "sdf", "Email": "email", "Subject": "subject", "Message": "message"}
        console.log(contactus);
        var ds = Contactus.dataSource;
        var sql = "EXEC [dbo].[AddContactUs] @Name = '" + contactus.Name +
            "', @Email = '" + contactus.Email +
            "', @Subject = '" + contactus.Subject +
            "', @Message = '" + contactus.Message + "'";
        console.log(sql);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: '<Email>',
                pass: '<Password>'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let HelperOptions = {
            from: contactus.Email,
            to: 'gopisivia@gmail.com',
            subject: contactus.Subject,
            text: contactus.Message
        }

        transporter.sendMail(HelperOptions, (err, mail) => {
            if (err) {
                console.log(err);
                cb(err, sql);
                return;
            }
            console.log('mail sent');
            cb(null, sql);
        });
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

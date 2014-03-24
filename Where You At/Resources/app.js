//Where You At
//had to restart due to a Titanium crash corrupting the previous project and breaking titanium completely
//Travis Mix
//AVF1403
//March 23, 2014

//include needed files
Ti.include("main.js");

//create our database for local storage
var db = Ti.Database.open('myDb');
db.execute('CREATE TABLE IF NOT EXISTS places(id INTEGER PRIMARY KEY, name TEXT, why TEXT, facing TEXT, lat INTEGER, lng INTEGER)');
db.close();

var Cloud = require('ti.cloud');
Cloud.debug = true;

//login to acs 
(function() { 
	var loginUser = function(){
		Cloud.Users.login({
			login: 'WhereUAt',
			password: '12345'
		}, function(e){
			// use .info method to view login info in the Console, if successful
			if (e.success){
				var user = e.users[0];
				Ti.API.info('Success!\n' + 
					'ACS User ID: ' + user.id + '\n' + 
					'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
					'ACS App Username: ' + user.username);
			} else {
				alert((e.error && e.message) || JSON.stringify(e));
			}
		});
	}; // loginUser ends
	loginUser();
	// now your app is ready to access ACS network and data services
})();

getInfo();

//open our main window
mainWin.open();

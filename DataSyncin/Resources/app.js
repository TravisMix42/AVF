//datasync project
//avf1403
//Travis Mix
//March 18, 2013

var Cloud = require("ti.cloud");

Ti.include("main.js");

//create our database for local storage
var db = Ti.Database.open('myDb');
db.execute('CREATE TABLE IF NOT EXISTS places(id INTEGER PRIMARY KEY, name TEXT)');
db.close();

updateLocal();

//login to the acs cloud services
(function() { 
	// load the Cloud Module
	var loginUser = function(){
		Cloud.Users.login({
			login: 'com.fullsail.demoApp',
			password: '12345'
		}, function(e){
			// use .info method to view login info in the Console, if successful
			if (e.success){
				var user = e.users[0];
			} else {
				alert((e.error && e.message) || JSON.stringify(e));
			}
		});
	}; // loginUser ends
	loginUser();
	// now your app is ready to access ACS network and data services
})();


//Photo Spammer
//Week 4 final app for AVF1403
//March 21, 2014
//Travis Mix

/*
 The purpose of this app is to allow the user to be able to 
 take a photo that can then be shared to the cloud as well as 
 be saved to local storage.  The photo will also have gps location
 data saved with the photo to allow the users to be able to be 
 able to click on a photo to view on a map where it was taken
 */

//include all neccessary files here
Ti.include("Main.js");


//require the cloud module
var Cloud = require("ti.cloud");
Cloud.debug = true;

//login to the cloud and check for errors
(function() { 
	var loginUser = function(){
		//log the app into the cloud
		Cloud.Users.login({
			login: 'com.fullsail.demoApp',
			password: '12345'
		}, function(e){
			//log success
			if (e.success){
				var user = e.users[0];
				Ti.API.info('Success!\n' + 
					'ACS User ID: ' + user.id + '\n' + 
					'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
					'ACS App Username: ' + user.username);
			} else {
				//return an error message
				alert((e.error && e.message) || JSON.stringify(e));
			}
		});
	}; // loginUser ends
	loginUser();
	// now your app is ready to access ACS network and data services
})();

//open the main window
mainWin.open();
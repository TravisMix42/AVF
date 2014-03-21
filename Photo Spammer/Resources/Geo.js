//Photo Spammer Camera.js file
//Week 4 final app for AVF1403
//March 21, 2014
//Travis Mix

Ti.include("functions.js");

//This file is responsible for getting geolocation info
var geoLat;		//latitude var used for geolocation
var geoLong;	//longitude var used for geolocation	

//access geolocation services and gather lat and long coords
var getGeo = function(){
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords.";
	Ti.Geolocation.getCurrentPosition(function(e){
		geoLat = e.coords.latitude;
		geoLong = e.coords.longitude;
		Ti.API.info("lat: " + geoLat + " long: " + geoLong);
	});
};


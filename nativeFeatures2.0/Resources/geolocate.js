//geolocate.js for Native Features app
//by Travis A. Mix
//for AVF1403
//on March 12, 2014

//everything in here will be applied to win1
var longCoordinateLabel = new Object();
var latCoordinateLabel = new Object();


var getGeoCoords = function(){
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords.";
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		latCoordinateLabel = Ti.UI.createLabel({
			color: 'black',
			text: 'Latitude: ' + lat,
			textAlign: 'center',
			font: {fontSize: '20dp', fontWeight: 'bold'},
			height : 80,
			top : 20,
			left : 80,
			right : 80 
		});
		longCoordinateLabel = Ti.UI.createLabel({
			color : 'black',
			text : 'Longitude: ' + lng,
			textAlign : 'center',
			font : {fontSize : '20dp', fontWeight : 'bold'},
			height : 80,
			top : 120,
			left : 80,
			right : 80
		});
		win1.add(longCoordinateLabel);
		win1.add(latCoordinateLabel);
	});
};

var refreshBtn = Ti.UI.createButton({
	height : 80,
	left : 20,
	right : 20,
	bottom : 20,
	borderRadius : 10,
	backgroundColor : 'green',
	color : 'black',
	title : "Get Location"
});


refreshBtn.addEventListener('click', function(){
	longCoordinateLabel.text = "";
	latCoordinateLabel.text = "";
	getGeoCoords();
});
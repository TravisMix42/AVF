//compass.js for Native Features app
//by Travis A. Mix
//for AVF1403
//on March 12, 2014

//everythign in here will be applied to win2


var compassBtn = Ti.UI.createButton({
	height : 80,
	bottom : 20,
	left : 20,
	right : 20,
	backgroundColor : 'green',
	color : 'black',
	title : "Get Heading",
	borderRadius : 10
});

var getCompass = function(){
	if(Ti.Geolocation.hasCompass){
		Ti.Geolocation.purpose = "location service needed for current heading";
		Ti.Geolocation.showCalibration = false;
		Ti.Geolocation.getCurrentHeading(function(e){
			var heading = e.heading.trueHeading;
			var headLbl = Ti.UI.createLabel({
				height : 100,
				top : 20,
				left : 20,
				right : 20,
				text : "heading: " + heading,
				font : {fontSize : "20dp", fontWeight : "bold"},
				textAlign : "center",
				color : "black",
				backgroundColor : "#fff"
			});
			win2.add(headLbl);
		});
	}
};

compassBtn.addEventListener('click', getCompass);
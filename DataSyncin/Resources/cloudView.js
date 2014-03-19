//localView.js file for datasyncin app
//avf 1403 week 3
//Travis Mix
//march 18, 2014

//create our button that will pull data from the cloud to the device
var cloudRtvBtn = Ti.UI.createButton({
	title : "Get Cloud Data",
	color : "#909090",
	backgroundColor : "green",
	height : '80dp',
	bottom : '20dp',
	left : '20dp',
	right : '20dp',
	borderRadius : 10,
	textAlign : "center"
});

//create a view to hold our table to get the button to show up
var superView = Ti.UI.createView({
	top : 0,
	left : 0,
	right : 0,
	bottom : 120
});

var table2 = Ti.UI.createTableView();

cloudRtvBtn.addEventListener('click', function(){
	Ti.API.info("cloud btn clicked");
	cloudRtv();
});
superView.add(table2);

//main.js for where you at app
//Travis Mix
//march 23, 2014

//add needed files
Ti.include("add.js");
Ti.include("functions.js");
var Map = require('ti.map');

var annos;

//create our main window
var mainWin = Ti.UI.createWindow({
	backgroundColor : "#fff"
});

//create our title view
var titleLbl = Ti.UI.createLabel({
	top : "20dp",
	height : "50dp",
	left : "0dp",
	right : "0dp",
	text : "Where You At",
	textAlign : "center",
	font : {fontSize : "30dp", fontWeight : "bold"},
	color : "black",
	backgroundColor : "#fff"
});

//create our main view
var mainView = Ti.UI.createView({
	top : "70dp",
	left : "0dp",
	right : "0dp",
	bottom : "80dp",
	backgroundColor : "#fff"
});

//create our map view 
var mapView = Map.createView({
    mapType : Map.NORMAL_TYPE,
    userLocation : true
});

//create our add button
var addBtn = Ti.UI.createButton({
	bottom : "10dp",
	width : "200dp",
	right : "20dp",
	height : "60dp",
	color : "#fff",
	backgroundColor : "green",
	title : "Add",
	textAlign : "center",
	borderRadius : 10
});

var syncBtn = Ti.UI.createButton({
	bottom : "10dp",
	left : "20dp",
	width : "200dp",
	height : "60dp",
	color : "#fff",
	backgroundColor : "green",
	title : "Get",
	textAlign : "center",
	borderRadius : 10
});


//add our window elements
mainWin.add(titleLbl);
mainWin.add(mainView);
mainWin.add(addBtn);
mainWin.add(syncBtn);
mainView.add(mapView);

//add our event listeners 
addBtn.addEventListener("click", function(){
	getInfo();
	addWin.open();
});

syncBtn.addEventListener("click", function(){
	getInfo();
});

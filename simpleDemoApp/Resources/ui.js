//ui.js for simpleDemoApp
//for avf1403 
//on 3/4/2014
//by Travis Mix
//this code file will hold all of our code for the app.


//create our window and give it a background color that is light grey
var mainWin = Ti.UI.createWindow({
	backgroundColor : "#909090",
	title : "Simple Demo App"
});

//create our labels needed to meet the project requirements
var lbl1 = Ti.UI.createLabel({
	text : "Travis Mix",
	color : "black",
	font : {fontSize : 48},
	top : 0,
	left : 20,
	right : 20,
	height : 120,
	textAlign : "left"
});

var lbl2 = Ti.UI.createLabel({
	text : "Avf 1403",
	color : "black",
	font : {fontSize : 36},
	bottom : 0, 
	left : 20,
	right : 20,
	height : 120,
	textAlign : "right"
});

//add our views and labels and all that to our main window
mainWin.add(lbl1);
mainWin.add(lbl2);

//open our main window
mainWin.open();
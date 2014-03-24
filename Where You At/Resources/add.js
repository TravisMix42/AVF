//add.js for where you at app
//Travis Mix
//march 23, 2014

//include needed files
Ti.include("functions.js");

//create our add window
var addWin = Ti.UI.createWindow({
	backgroundColor : "#fff",
	modal : true
});

//create our title view
var addTitleLbl = Ti.UI.createLabel({
	top : "20dp",
	height : "50dp",
	left : "0dp",
	right : "0dp",
	text : "Add New",
	textAlign : "center",
	font : {fontSize : "30dp", fontWeight : "bold"},
	color : "black",
	backgroundColor : "#fff"
});

//create our add view
var addView = Ti.UI.createView({
	top : "70dp",
	left : "0dp",
	right : "0dp",
	bottom : "80dp",
	backgroundColor : "#fff"
});

//create our label to instruct the user what to do
var infoLbl = Ti.UI.createLabel({
	top : "40dp",
	left : "20dp",
	right : "20dp",
	height : "auto",
	text : "Enter information to store with the location you are saving \n You must add a name",
	font : {fontSize : "20dp"},
	textAlign : "center",
	color : "black",
	backgroundColor : "#fff"
});

//create our text entry fields for the add screen to allow the user to add a name
var nameTxtField = Ti.UI.createTextField({
	hintText : "Name",
	borderRadius : 10,
	textAlign : "center",
	top : "160dp",
	left : "20dp",
	right : "20dp",
	height : "40dp",
	color : "black",
	backgroundColor : "#909090"
});

var whyTxtField = Ti.UI.createTextField({
	//we are going to abuse the cloud places module cause i can and it works better for the app
	hintText : "What your doing?",
	borderRadius : 10,
	textAlign : "center",
	top : "220dp",
	left : "20dp",
	right : "20dp",
	height : "40dp",
	color : "black",
	backgroundColor : "#909090"	
});

//create our done button
var doneBtn = Ti.UI.createButton({
	bottom : "10dp",
	left : "20dp",
	right : "20dp",
	height : "60dp",
	color : "#fff",
	backgroundColor : "green",
	title : "Done",
	textAlign : "center",
	borderRadius : 10
});

//add our parts to the window
addWin.add(addTitleLbl);
addWin.add(addView);
addWin.add(doneBtn);
addView.add(infoLbl);
addView.add(nameTxtField);
addView.add(whyTxtField);

//add our Event listeners
doneBtn.addEventListener("click", function(){
	storeInfo();
	addWin.close();
});


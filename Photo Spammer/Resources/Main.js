//Photo Spammer Main.js file
//Week 4 final app for AVF1403
//March 21, 2014
//Travis Mix

/*
 This file will be responsible for handiling all the main
 UI code for the camera / Photo Gallery screen of the app
 */

//include any needed code files here
Ti.include("Camera.js");

//create our main window
var mainWin = Ti.UI.createWindow({
	backgroundColor : "#909090"
});

//title for the page doing it this way to prevent needless code to do the same thing
var titleLbl = Ti.UI.createLabel({
	text : "Photo Gallery",
	top : "20dp",
	height : "30dp",
	left : "0dp",
	right : "0dp",
	color : "black",
	font : {fontSize : "24dp", fontWeight : "bold"},
	textAlign : "center"
});

//create our main photoGallery view
var mainView = Ti.UI.createView({
	top : "50dp",
	left : "0dp",
	right : "0dp",
	bottom : "100dp",
	backgroundColor : "#fff"
});

//create our button to allow the user to take a photo
var photoButton = Ti.UI.createButton({
	title : "Take Photo",
	bottom : "10dp",
	left : "20dp",
	right : "20dp",
	height : "80dp",
	backgroundColor : "green",
	color : "#909090",
	borderRadius : 10
});

//take photo button event listener
photoButton.addEventListener("click", function(){
	Ti.API.info("photo button clicked");
	takePic();
});

//add all our parts to the mainWin
mainWin.add(titleLbl);
mainWin.add(mainView);
mainWin.add(photoButton);

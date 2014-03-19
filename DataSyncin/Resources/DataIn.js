//DataIn.js file for datasyncin app
//avf 1403 week 3
//Travis Mix
//march 18, 2014

//include our functions
Ti.include("functions.js");

//add our data entry fields

//our location entry fields
var nameEnter = Ti.UI.createTextField({
	top : '20dp',
	left : '20dp',
	right : '20dp',
	height : '40dp',
	borderRadius : 10,
	color : 'black',
	hintText : 'Enter Location Name',
	textAlign : 'center',
	backgroundColor : '#fff'	
});

var addressEnter = Ti.UI.createTextField({
	top : '80dp',
	left : '20dp',
	right : '20dp',
	height : '40dp',
	borderRadius : 10,
	color : 'black',
	hintText : 'Enter Address',
	textAlign : 'center',
	backgroundColor : '#fff'
});

var cityEnter = Ti.UI.createTextField({
	top : '140dp',
	left : '20dp',
	right : '20dp',
	height : '40dp',
	borderRadius : 10,
	color : 'black',
	backgroundColor : '#fff',
	hintText : 'Enter City',
	textAlign : 'center'
});

var stateEnter = Ti.UI.createTextField({
	top : '200dp',
	left : '20dp',
	right : '20dp',
	height : '40dp',
	borderRadius : 10,
	color : 'black',
	backgroundColor : '#fff',
	hintText : 'Enter State',
	textAlign : 'center'
});

//sync / store button
var syncBtn = Ti.UI.createButton({
	title : 'Sync / Store',
	color : '#909090',
	backgroundColor : 'green',
	height : '80dp',
	borderRadius : 10,
	bottom : '20dp',
	left : '20dp',
	right : '20dp',
	textAlign : 'center'
});




syncBtn.addEventListener('click', function(){
	Ti.API.info('button clicked');
	updateLocal();
	updateCloud();
});



//Native Features app
//by Travis A. Mix
//for AVF1403
//on March 12, 2014

//import our other code files
Ti.include('geolocate.js');
Ti.include('compass.js');
Ti.include('camera.js');
Ti.include('network.js');


// create tab group
var tabGroup = Titanium.UI.createTabGroup();


// tab1 "Geolocation"
var win1 = Titanium.UI.createWindow({  
    title:'Geolocation',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Geolocate',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Geolocation',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

// tab 2 "Compass"
var win2 = Titanium.UI.createWindow({  
    title:'Compass',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Compass',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Compass',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//tab 3 "Camera"
var win3 = Ti.UI.createWindow({
	title : 'Camera',
	backgroundColor : '#fff'
});

var tab3 = Ti.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Camera',
	window : win3
});

var label3 = Ti.UI.createLabel({
	color : '#999',
	text : 'Camera',
	font : {fontSize : 20, fontFamily: 'Helvetica Neue'},
	textAlign : 'center',
	width : 'auto'
});

win3.add(label3);

//tab 4 "Network/LiveData"
var win4 = Ti.UI.createWindow({
	title : 'Network/LiveData',
	backgroundColor : '#fff'
});

var tab4 = Ti.UI.createTab({
	icon : 'KS_nav_ui.png',
	title : 'Network/LiveData',
	window : win4
});

var label4 = Ti.UI.createLabel({
	color : "#999",
	text : "Network and Live Data",
	font : {fontSize : 20, fontFamily : 'Helvetica Neue'},
	textAlign : 'center',
	width : 'auto'
});

win4.add(label4);

//  add tabs
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);


// open tab group
tabGroup.open();

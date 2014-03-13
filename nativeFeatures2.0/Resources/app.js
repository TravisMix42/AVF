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

win1.add(refreshBtn);

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

win2.add(compassBtn);

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

win3.add(takePicBtn);

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

win4.add(redditGetBtn);

//  add tabs
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);


// open tab group
tabGroup.open();

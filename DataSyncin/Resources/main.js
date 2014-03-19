//main.js file for datasyncin app
//avf 1403 week 3
//Travis Mix
//march 18, 2014

//import other code files
Ti.include("DataIn.js");
Ti.include("localView.js");
Ti.include("cloudView.js");

//create our 3 tabs we need one for user entry one for 
//local saved data view and one for cloud data viewing

//create our tab group
var tabGroup = Ti.UI.createTabGroup();

/////////////////////////////////////////////////////////////////////////////////////////
// tab1 data entry
/////////////////////////////////////////////////////////////////////////////////////////
var win1 = Titanium.UI.createWindow({  
    title:'Data Input',
    backgroundColor:'#909090'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Data Input',
    window:win1
});

//add our stuff to win1
win1.add(nameEnter);
win1.add(addressEnter);	
win1.add(cityEnter);
win1.add(stateEnter);
win1.add(syncBtn);

/////////////////////////////////////////////////////////////////////////////////////////
//tab2 local storage view
/////////////////////////////////////////////////////////////////////////////////////////
var win2 = Titanium.UI.createWindow({  
    title:'Local Storage View',
    backgroundColor:'#909090'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Local View',
    window:win2
});

win2.add(table1);

/////////////////////////////////////////////////////////////////////////////////////////
//tab3 cloud storage view
/////////////////////////////////////////////////////////////////////////////////////////
var win3 = Titanium.UI.createWindow({  
    title:'Cloud Storage View',
    backgroundColor:'#909090'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Cloud View',
    window:win3
});

win3.add(superView);
win3.add(cloudRtvBtn);

/////////////////////////////////////////////////////////////////////////////////////////
//add our tabs to our tabGroup
/////////////////////////////////////////////////////////////////////////////////////////
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);

//open our tabgroup
tabGroup.open();

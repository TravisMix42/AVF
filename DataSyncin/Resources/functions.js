//functions.js file for datasyncin app
//avf 1403 week 3
//Travis Mix
//march 18, 2014

//store our functions needed that dont really fit anywhere else in the app


//vars 
var rows;
var name;
var id;
var row;
var row2;
//var cRowdata;

//function to update and store newly added data to the local
//storage to be displayed in the local view tab of the app
var updateLocal = function(){
	//were just gonna store the name of the locations
	//in local storage for simplicities sake
	db = Ti.Database.open('myDb');
	db.execute('INSERT INTO places(name) VALUES (?)', nameEnter.value);
	db.close();
	createRows();
};

//function to update and store newly added data to the cloud
var updateCloud = function(){
	Cloud.Places.create({
		name : nameEnter.value,
		address : addressEnter.value,
		city : cityEnter.value,
		state : stateEnter.value
	}, function(e){
		if(e.success){
			var place = e.places[0];
		}else{
			alert("Error:\n" + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
	nameEnter.value = "";
	addressEnter.value = "";
	cityEnter.value = "";
	stateEnter.value = "";
};

var cloudRtv = function(){
	Cloud.Places.search({}, function(e){
		if(e.success){
			Ti.API.info('cloud pull sucessful');
			var cRowdata = [];
			for(var i = 0; i < e.places.length; i++){
				var place = e.places[i];
				row2 = Ti.UI.createTableViewRow({
					height : "auto"
				});
				var lblName = Ti.UI.createLabel({
					text : place.name,
					font : {fontSize : 12},
					left : 10,
					top : 0
				});
				
				var lblAddress = Ti.UI.createLabel({
					text : place.address,
					font : {fontSize : 10},
					left : 10,
					top : 14
				});
				
				var lblCity = Ti.UI.createLabel({
					text : place.city,
					font : {fontSize : 10},
					left : 10,
					top : 28
				});
				
				var lblState = Ti.UI.createLabel({
					text : place.state,
					font : {fontSize : 10},
					left : 10,
					top : 42
				});
				row2.add(lblName);
				row2.add(lblAddress);
				row2.add(lblCity);
				row2.add(lblState);
				cRowdata.push(row2);
			}
			table2.setData(cRowdata);
		}
		else{
			alert("Error: \n" + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

//initialize our rows
var createRows = function(){
	var rowData = [];
	
	//open our database
	var db = Ti.Database.open('myDb');
	//get info from database
	rows = db.execute('SELECT * FROM places');
	
	while(rows.isValidRow()){
		name = rows.fieldByName('name');
		id = rows.fieldByName('id');
		
		row = Ti.UI.createTableViewRow({
			height : 'auto',
			id : id
		});
		
		var lbl1 = Ti.UI.createLabel({
			text : "Name: " + name,
			font : {fontSize : 12},
			left : 10,
			top : 0
		});
		
		row.add(lbl1);
		rowData.push(row);
		rows.next();
	}
	table1.setData(rowData);
};
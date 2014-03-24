//functions.js for where you at app
//Travis Mix
//march 23, 2014

//vars for functions.js
var lat;
var lng;
var head;
var facing;
var rows;
var annos = [];

var getInfo = function(){
	Cloud.Places.search({}, function (e) {
    if (e.success) {
        Ti.API.info('Success:\n' +
            'Count: ' + e.places.length);
        for (var i = 0; i < e.places.length; i++) {
            var place = e.places[i];
            annos.push(Map.createAnnotation({
            	latitude : place.latitude,
            	longitude : place.longitude,
            	title : place.name,
            	subtitle : place.city + " facing: " + place.state,
            	pincolor : Map.ANNOTATION_RED,
            	myId : i 
            }));
        }
        mapView.setAnnotations(annos);
    } else {
    	alert("Cannot pull places from the cloud so only showing locally stored places");
        rows = db.execute('SELECT * FROM places');
        var i = 0;
        while(rows.isValidRow){
        	var name = rows.fieldByName('name');
        	var address = rows.fieldByName('address');
        	var why = rows.fieldByName('why');
        	var face = rows.fieldByName('facing');
        	var lat = rows.fieldByName('lat');
        	var lng = rows.fieldByName('lng'); 
        	i = i + 1;
        	
        	annos.push(Map.createAnnotation({
            	latitude : lat,
            	longitude : lng,
            	title : name,
            	subtitle : why + " facing: " + face,
            	pincolor : MAP.ANNOTATION_RED,
            	myId : i 
            }));
        }
        mapView.setAnnotations(annos);
    }
});
};

var storeInfo = function(){
	//get our long lat and compass info
	Ti.Geolocation.purpose = "Your location information is needed to place you on the map.";
	Ti.Geolocation.getCurrentPosition(function(e){
		Ti.Geolocation.purpose = "location service needed for current heading";
		Ti.Geolocation.showCalibration = true;
		lat = e.coords.latitude;
		lng = e.coords.longitude;
		Ti.Geolocation.getCurrentHeading(function(e){
			head = e.heading.trueHeading;
			if(head == 0){
				facing = 'north';
			}
			else if(head > 330 && head <= 30){
				facing = 'north';
			}
			else if(head > 30 && head <= 60){
				facing = 'northeast';
			}
			else if(head > 60 && head <= 120){
				facing = 'east';
			}
			else if(head > 120 && head <= 150){
				facing = 'southeast';
			}
			else if(head > 150 && head <= 210){
				facing = 'south';
			}
			else if(head > 210 && head <= 240){
				facing = 'southwest';
			}
			else if(head > 240 && head <= 300){
				facing = 'west';
			}
			else if(head > 300 && head <= 330){
				facing = 'northwest';
			}
			alert("lat: " + lat + " long: " + lng + " facing: " + facing);
			
			//send to the cloud
			Cloud.Places.create({
				name : nameTxtField.value,
				city : whyTxtField.value,
				state : facing,
				latitude : lat,
				longitude : lng
			}, function(e){
				if(e.success){
					var place = e.places[0];
				}else{
					alert("Error:\n" + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
			
			//send to local database
			db = Ti.Database.open('myDb');
			db.execute('INSERT INTO places(name, why, facing, lat, lng) VALUES (?, ?, ?, ?, ?)', nameTxtField.value, whyTxtField.value, facing, lat, lng);
			db.close();
		});
		
		
	});
	
	
};

//network.js for Native Features app
//by Travis A. Mix
//for AVF1403
//on March 12, 2014

//everything in here will be applied to win4

//pull the first thing on reddit and display it to the screen
//make our button to pull the event
var redditGetBtn = Ti.UI.createButton({
	title : "Get Reddit Post",
	textAlign : 'center',
	color : "black",
	backgroundColor : 'green',
	height : 80,
	bottom : 20,
	left : 20,
	right : 20,
	borderRadius : 10
});
var getReddit = function(){
//setup our http client
var xhr = Ti.Network.createHTTPClient({
	onload : function(){
		//Ti.API.info(this.responseText);
		jsonData = JSON.parse(this.responseText);
			datastuff = jsonData.data.children[0];
			
			var lbl1 = Ti.UI.createLabel({
				text : "by " + datastuff.data.author,
				font : {fontSize : "20dp"},
				height : 30,
				top : 20,
				left : 80,
				right : 20,
			});
			
			var lbl2 = Ti.UI.createLabel({
				text : datastuff.data.title,
				font : {fontSize : "20dp"},
				left : 80,
				right : 20,
				top : 40,
				height : 100
			});
			
			var tImg = Ti.UI.createImageView({
				image : datastuff.data.thumbnail,
				left : 5,
				top : 20,
			});
			win4.add(lbl1);
			win4.add(lbl2);
			win4.add(tImg);
	},
	
	onerror : function(e){
		Ti.API.info("Status: " + this.status);
		Ti.API.info("Text: " + this.responseText);
		Ti.API.info("Error: " + e.error);
		alert("Problems retrieving data :(");
	},
	
	timeout : 10000
});


xhr.open("GET", "http://api.reddit.com");
xhr.send();

};

redditGetBtn.addEventListener('click', getReddit);

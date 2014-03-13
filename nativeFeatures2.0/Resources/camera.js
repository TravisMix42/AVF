//camera.js for Native Features app
//by Travis A. Mix
//for AVF1403
//on March 12, 2014

//everything in here will be applied to win3

var takePicBtn = Ti.UI.createButton({
	title : "take a pick",
	height : 80,
	bottom : 20,
	left : 20,
	right : 20,
	color : 'black',
	backgroundColor : 'green',
	borderRadius : 10
});

takePicBtn.addEventListener('click', function(e){
	Ti.Media.showCamera({
		saveToPhotoGallery: true,
		allowEditing: true,
		mediaTypes: [Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(e) {
	 		if(e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var img = Ti.UI.createImageView({
					width: 200,
					height: 200,
					image: e.media
				});
				win3.add(img);
			} 
		}
	});
});


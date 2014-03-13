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
	backgroundColor : 'green'
});

takePicBtn.addEventListener('click', function(e){
	Ti.Media.showCamera({
		saveToPhotoGallery: true,
		allowEditing: true,
		mediaTypes: [Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(e) {
	 		if(e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var img = Ti.UI.createImageView({
					width: win.width,
					height: win.height,
					image: e.media
				});
				win.add(img);
			} else {
				alert("thought this was a photo but, it's:" + e.mediaType);
			}
		},
		error: function(error) {
			if (error.code == Ti.Media.NO_CAMERA) {
				alert("please run this on a device");
			} else {
				alert("other error: " + error.code);
			}
		}
	});
});


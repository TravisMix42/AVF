//Photo Spammer Camera.js file
//Week 4 final app for AVF1403
//March 21, 2014
//Travis Mix

//This file is responsible for handiling the camera 

//access the camera to take the picture
var takePic = function(){
	Ti.Media.showCamera({
		saveToPhotoGallery: false,
		allowEditing: false,
		mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(e) {
	 		if(e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var img = Ti.UI.createImageView({
					width: mainView.width,
					height: mainView.height,
					image: e.media
				});
				mainView.add(img); 
			} else {
				alert("thought this was a photo but, it's:" + e.mediaType);
			}
		},
		error: function(error) {
			if (error.code == Ti.Media.NO_CAMERA) {
				alert("please run this on a device with a camera");
			} else {
				alert("other error: " + error.code);
			}
		}
	});
};

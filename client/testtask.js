
if (Meteor.isClient) {
	Meteor.startup(function() {
		GoogleMaps.load();
	});
	
	Template.allObjects.helpers({
		customObjects: function () {
			return CustomObjects.find();
		}
	});
	
	Template.map.helpers({  
		mapOptions: function() {
			if (GoogleMaps.loaded()) {
				return {
					center: new google.maps.LatLng(0, 0),
					zoom: 2
				};
			}	
		}
	});
	
	Template.map.onCreated(function() {   
		GoogleMaps.ready('map', function(map) {
			console.log("I'm ready!");
			var allObjects = CustomObjects.find();
			allObjects.forEach(function (obj) {
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(obj.latitude, obj.longitude),
					title: obj.title,
					postId: obj._id
				});
				marker.setMap(map.instance);
			}); 
        });
	});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


if (Meteor.isClient) {
	Meteor.startup(function() {
		GoogleMaps.load();
	});
	
	Template.allObjects.helpers({
		customObjects: function () {
			return CustomObjects.find();
		}, 
		settings: function () {
			return {
				rowsPerPage: 5,
				showFilter: true,
				//showColumnToggles: false,
				fields: [
					{ 
						key: 'objectType', 
						label: 'Object type' 
					}, { 
						key: 'firstName', 
						label: 'First name' 
					}, { 
						key: 'lastName', 
						label: 'Last name' 
					}, { 
						key: 'description', 
						label: 'Description' 
					}, { 
						key: 'latitude', 
						label: 'Latitude' 
					}, { 
						key: 'longitude', 
						label: 'Longitude' 
					}, { 
						key: 'threatLevel', 
						label: 'ThreatLevel' 
					}, { 
						key: '_id', 
						label: '', 
						fn: function(_id) {  
							var html = '<button class="btn btn-info btn-xs" type="button"><i class="fa fa-paste"></i> Edit</button>'
							return new Spacebars.SafeString(html);
						}  
					}
				]
			};
		}
	});
	
	Template.map.helpers({  
		mapOptions: function() {
			if (GoogleMaps.loaded()) {
				return {
					center: new google.maps.LatLng(52.2167, 21.0333),
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

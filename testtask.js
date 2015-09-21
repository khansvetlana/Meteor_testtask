
if (Meteor.isClient) {
	
	Template.allObjects.helpers({
		customObjects: function () {
			return CustomObjects.find();
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {

	Router.configure({
		layoutTemplate: 'main'
	});
	
	Router.map(function () {
		this.route('main', {
			path: '/',
			template: 'home'
		});
		
		this.route('newObject', {
			path: '/newObject',
			template: 'newObject'
		});

		this.route('map', {
			path: '/geoPortal',
			template: 'map'
		});
		
		this.route('allObjects', {
			path: '/allObjects',
			template: 'allObjects'
		});
		
	});
}
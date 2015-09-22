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

		this.route('geoPortal', {
			path: '/geoPortal',
			template: 'geoPortal'
		});
	});
}
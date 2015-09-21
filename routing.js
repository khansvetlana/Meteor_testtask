if (Meteor.isClient) {

	Router.configure({
		layoutTemplate: 'main'
	});
	
	/*Router.onBeforeAction(function() {
		if (! Meteor.userId()) {
			this.render('newObject');
		} else {
			this.next();
		}
	});*/
	
	Router.map(function () {
		this.route('main', {
			path: '/',
			template: 'main'
		});
		
		this.route('newObject', {
			path: '/newObject',
			template: 'newObject'
		});

		/*this.route('geoPortal', {
			path: '/geoPortal',
			template: 'geoPortal'
		});*/
	});
}
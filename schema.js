if (Meteor.isClient) {

	CustomObjects.attachSchema(new SimpleSchema({
		objectType: {
			type: String,
			label: 'Object type',
			allowedValues: ['Institution', 'Transport', 'Nature', 'Infrastructure', 'Person', 'Undefined'],
			optional: false
		},
		
		firstName: {
			type: String,
			label: 'First name',
			optional: false,
			max: 100
		},
		
		lastName: {
			type: String,
			label: 'Last name',
			optional: false,
			max: 100
		},
		
		description: {
			type: String,
			label: 'Description',
			optional: true,
			max: 200
		},
		
		latitude: {
			type: Number,
			decimal: true,
			optional: false
		},
		
		longitude: {
			type: Number,
			decimal: true,
			optional: false
		},			
		
		threatLevel: {
			type: String,
			allowedValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			optional: false
		}
	}));
}
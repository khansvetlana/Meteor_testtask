CustomObjects = new Mongo.Collection('customObjects');

CustomObject = Astro.Class({
	name: 'CustomObject',
	collection: CustomObjects,
	fields: 
	{
		objectType: 'string',
		firstName: 'string',
		lastName: 'string',
		description: 'string',
		latitude: 'number', 
		longitude: 'number',
		threatLevel: 'number'
	}
});









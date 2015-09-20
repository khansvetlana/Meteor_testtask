CustomObjects = new Mongo.Collection('customObjects');

CustomObject = Astro.Class({
	name: 'CustomObject',
	collection: CustomObjects,
	fields: 
	{
		object_type: 'string',
		first_name: 'string',
		last_name: 'string',
		description: 'string',
		latitude: 'number', 
		longitude: 'number',
		threat_level: 'number'
	}
});
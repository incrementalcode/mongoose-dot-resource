var mongoose = Object.create(require('mongoose'));

module.exports = mongoose;

var resources = {};

/**
	Get or define a mongoose resource handler globally.
*/
mongoose.resource = function(name, handlers) {
	// if it has been defined, don't redefine.
	if (name in resources) return handlers[name];
	// is this just a get?
	if (typeof handlers === 'undefined') return resources[name];
	// define and return
	return (resources[name] = handlers);
};

var schemas = {};

/**
	Get or define a mongoose schema globally.
*/
mongoose.schema = function(name, spec) {
	// if it has been defined, don't redefine.
	if (name in schemas) return schemas[name];
	// is this just a get?
	if (typeof spec === 'undefined') return schemas[name];
	// define and return
	return (schemas[name] = spec);
};

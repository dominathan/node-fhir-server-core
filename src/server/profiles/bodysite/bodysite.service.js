/* eslint-disable no-unused-vars */
module.exports.count = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'count\'';
	logger.info(message);
	reject(new Error(message));
});

module.exports.search = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'search\' in BodySite service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.searchById = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'searchById\' in BodySite service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.create = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'create\' in BodySite service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.update = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'update\' in BodySite service.';
	logger.info(message);
	reject(new Error(message));
});

module.exports.remove = (args, logger) => new Promise((resolve, reject) => {
	let message = 'Calling mock service. Did you forget to implement \'remove\' in BodySite service.';
	logger.info(message);
	reject(new Error(message));
});

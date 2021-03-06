const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./messagedefinition.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'messagedefinition',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let MessageDefinition = require(resolveFromVersion(version, 'base/MessageDefinition'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MessageDefinition.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/messagedefinition.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

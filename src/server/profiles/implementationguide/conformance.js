const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./implementationguide.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'implementationguide',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ImplementationGuide = require(resolveFromVersion(version, 'base/ImplementationGuide'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImplementationGuide.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/implementationguide.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

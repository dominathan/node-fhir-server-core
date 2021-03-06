const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./provenance.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'provenance',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Provenance = require(resolveFromVersion(version, 'base/Provenance'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Provenance.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/provenance.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

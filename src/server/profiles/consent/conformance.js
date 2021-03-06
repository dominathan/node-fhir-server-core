const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./consent.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'consent',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Consent = require(resolveFromVersion(version, 'uscore/Consent'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Consent.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/consent.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

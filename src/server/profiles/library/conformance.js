const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./library.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'library',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let Library = require(resolveFromVersion(version, 'base/Library'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Library.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/library.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

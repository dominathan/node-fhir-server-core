const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./imagingstudy.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'imagingstudy',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ImagingStudy.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/imagingstudy.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

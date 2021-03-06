const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./testreport.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'testreport',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let TestReport = require(resolveFromVersion(version, 'base/TestReport'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: TestReport.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/testreport.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

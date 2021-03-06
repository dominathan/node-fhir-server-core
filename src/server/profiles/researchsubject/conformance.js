const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./researchsubject.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'researchsubject',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let ResearchSubject = require(resolveFromVersion(version, 'base/ResearchSubject'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ResearchSubject.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/researchsubject.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

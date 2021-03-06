const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./careplan.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'careplan',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CarePlan.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-careplan.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./allergyintolerance.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'allergyintolerance',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: AllergyIntolerance.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./medicationstatement.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'medicationstatement',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let MedicationStatement = require(resolveFromVersion(version, 'uscore/MedicationStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: MedicationStatement.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationstatement.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

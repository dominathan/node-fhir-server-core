const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./structuremap.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'structuremap',
	resource: (version, count) => {
		let searchParams = generateSearchParamsForConformance(routes, version);
		let StructureMap = require(resolveFromVersion(version, 'base/StructureMap'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: StructureMap.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/structuremap.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};

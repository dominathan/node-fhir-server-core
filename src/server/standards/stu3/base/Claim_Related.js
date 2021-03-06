const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Identifier = require('./Identifier');

class Claim_Related extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_Related';
	}

	// Other claims which are related to this claim such as prior claim versions or for related services.
	get claim () {
		return this._claim;
	}

	set claim ( new_value ) {
		this._claim = new Reference(new_value);
	}

	// For example prior or umbrella.
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		this._relationship = new CodeableConcept(new_value);
	}

	// An alternate organizational reference to the case or file to which this particular claim pertains - eg Property/Casualy insurer claim # or Workers Compensation case # .
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		this._reference = new Identifier(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			claim: this._claim,
			relationship: this._relationship,
			reference: this._reference
		});
	}

}

module.exports = Claim_Related;

const Element = require('./Element');
const Coding = require('./Coding');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Range = require('./Range');

class UsageContext extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'UsageContext';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'UsageContext';
	}

	// A code that identifies the type of context being specified by this usage context.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new Coding(new_value);
	}

	// A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	get valueCodeableConcept () {
		return this._valueCodeableConcept;
	}

	set valueCodeableConcept ( new_value ) {
		this._valueCodeableConcept = new CodeableConcept(new_value);
	}

	// A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	get valueQuantity () {
		return this._valueQuantity;
	}

	set valueQuantity ( new_value ) {
		this._valueQuantity = new Quantity(new_value);
	}

	// A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
	get valueRange () {
		return this._valueRange;
	}

	set valueRange ( new_value ) {
		this._valueRange = new Range(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code && this._code.toJSON(),
			valueCodeableConcept: this._valueCodeableConcept && this._valueCodeableConcept.toJSON(),
			valueQuantity: this._valueQuantity && this._valueQuantity.toJSON(),
			valueRange: this._valueRange && this._valueRange.toJSON()
		});
	}

}

module.exports = UsageContext;

const BackboneElement = require('./BackboneElement');

class ElementDefinition_Mapping extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Mapping';
	}

	// An internal reference to the definition of a mapping.
	get identity () {
		return this._identity;
	}

	set identity ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field identity`);
		}
		this._identity = new_value;
	}

	// Identifies the computable language in which mapping.map is expressed.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this._language = new_value;
	}

	// Expresses what part of the target specification corresponds to this element.
	get map () {
		return this._map;
	}

	set map ( new_value ) {
		this._map = new_value;
	}

	// Comments that provide information about the mapping or its use.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identity: this._identity,
			language: this._language,
			map: this._map,
			comment: this._comment
		});
	}

}

module.exports = ElementDefinition_Mapping;

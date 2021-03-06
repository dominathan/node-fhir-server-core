const Element = require('./Element');
const Quantity = require('./Quantity');

class Range extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Range';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Range';
	}

	// The low limit. The boundary is inclusive.
	get low () {
		return this._low;
	}

	set low ( new_value ) {
		this._low = new Quantity(new_value);
	}

	// The high limit. The boundary is inclusive.
	get high () {
		return this._high;
	}

	set high ( new_value ) {
		this._high = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			low: this._low && this._low.toJSON(),
			high: this._high && this._high.toJSON()
		});
	}

}

module.exports = Range;

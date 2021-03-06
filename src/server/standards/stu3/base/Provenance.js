const DomainResource = require('./DomainResource');
const Reference = require('./Reference');
const Period = require('./Period');
const Coding = require('./Coding');
const Provenance_Agent = require('./Provenance_Agent');
const Provenance_Entity = require('./Provenance_Entity');
const Signature = require('./Signature');

class Provenance extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Provenance';
	}

	// This is a Provenance resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Provenance'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The period during which the activity occurred.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// The instant of time at which the activity was recorded.
	get recorded () {
		return this._recorded;
	}

	set recorded ( new_value ) {
		this._recorded = new_value;
	}

	// Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
	get policy () {
		return this._policy;
	}

	set policy ( new_value ) {
		this._policy = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Where the activity occurred, if relevant.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// The reason that the activity was taking place.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
	get activity () {
		return this._activity;
	}

	set activity ( new_value ) {
		this._activity = new Coding(new_value);
	}

	// An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
	get agent () {
		return this._agent;
	}

	set agent ( new_value ) {
		this._agent = Array.isArray(new_value) ? new_value.map(val => new Provenance_Agent(val)) : [new Provenance_Agent(new_value)];
	}

	// An entity used in this activity.
	get entity () {
		return this._entity;
	}

	set entity ( new_value ) {
		this._entity = Array.isArray(new_value) ? new_value.map(val => new Provenance_Entity(val)) : [new Provenance_Entity(new_value)];
	}

	// A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
	get signature () {
		return this._signature;
	}

	set signature ( new_value ) {
		this._signature = Array.isArray(new_value) ? new_value.map(val => new Signature(val)) : [new Signature(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			target: this._target,
			period: this._period,
			recorded: this._recorded,
			policy: this._policy,
			location: this._location,
			reason: this._reason,
			activity: this._activity,
			agent: this._agent,
			entity: this._entity,
			signature: this._signature
		});
	}

}

module.exports = Provenance;

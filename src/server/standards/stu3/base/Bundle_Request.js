const BackboneElement = require('./BackboneElement');

class Bundle_Request extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle_Request';
	}

	// The HTTP verb for this entry in either a change history, or a transaction/ transaction response.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['GET', 'POST', 'PUT', 'DELETE'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field method`);
		}
		this._method = new_value;
	}

	// The URL for this entry, relative to the root (the address to which the request is posted).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
	get ifNoneMatch () {
		return this._ifNoneMatch;
	}

	set ifNoneMatch ( new_value ) {
		this._ifNoneMatch = new_value;
	}

	// Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
	get ifModifiedSince () {
		return this._ifModifiedSince;
	}

	set ifModifiedSince ( new_value ) {
		this._ifModifiedSince = new_value;
	}

	// Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
	get ifMatch () {
		return this._ifMatch;
	}

	set ifMatch ( new_value ) {
		this._ifMatch = new_value;
	}

	// Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
	get ifNoneExist () {
		return this._ifNoneExist;
	}

	set ifNoneExist ( new_value ) {
		this._ifNoneExist = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			method: this._method,
			url: this._url,
			ifNoneMatch: this._ifNoneMatch,
			ifModifiedSince: this._ifModifiedSince,
			ifMatch: this._ifMatch,
			ifNoneExist: this._ifNoneExist
		});
	}

}

module.exports = Bundle_Request;

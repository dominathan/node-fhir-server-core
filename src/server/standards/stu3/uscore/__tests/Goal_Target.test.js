const Goal_Target = require('../Goal_Target');

describe('Goal_Target Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Goal_Target();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(Goal_Target.__resourceType).toBe('Goal_Target');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Goal_Target();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});

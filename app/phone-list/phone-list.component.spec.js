'use strict';

describe('phoneList', function(){
	// Load the module that contains the `phoneList` component before each test
	beforeEach(module('phoneList'));
	
	// Test the controller
	describe('PhoneListController', function(){

		var ctrl;

		beforeEach(inject(function($componentController){
			ctrl = $componentController('phoneList');
		}));
	
		//We ask AngularJS to inject the $controller service into our test function.
		it('should create a "phone" model with 3 phones', function(){
			expect(ctrl.phones.length).toBe(3);
		});

		it('should set a default value for the "orderProp" to be age', function(){
			expect(ctrl.orderProp).toBe('age');
		});

	});
});
'use strict';

describe('phoneList', function(){
	//Before each test we tell AngularJS to load the phonecatApp module.
	beforeEach(module('phoneList'));

	describe('PhoneListController', function(){
	
	//We ask AngularJS to inject the $controller service into our test function.
	it('should create a "phone" model with 3 phones',
		inject(function($componentController){
			//The test retrieves the controller associated 
			//with the phoneList component
			var ctrl = $componentController('phoneList');

			expect(ctrl.phones.length).toBe(3);
		}));
	});
});
'use strict';

describe('phoneList', function(){
	// Load the module that contains the `phoneList` component before each test
	beforeEach(module('phoneList'));

	// Test the controller
	describe('Controller', function(){

		var $httpBackend, ctrl;

		beforeEach(inject(function($componentController, _$httpBackend_){
			$httpBackend = _$httpBackend_;

			/*
			Use the $httpBackend.expectGET() method to train the $httpBackend service to expect 
			an incoming HTTP request and tell it what to respond with.
			*/

			$httpBackend.expectGET('phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

			ctrl = $componentController('phoneList');
		}));
		
		it('should create "phones" with 2 phones fetched with "$http"', function(){
			expect(ctrl.phones).toBeUndefined();

			$httpBackend.flush();
			expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
		});
		

		it('should set a default value for the "orderProp" to be age', function(){
			expect(ctrl.orderProp).toBe('age');
		});

	});
});
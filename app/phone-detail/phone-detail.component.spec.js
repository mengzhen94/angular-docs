'use strict';

describe('phoneDetail', function(){
	// Load the module that contains the `phoneList` component before each test
	beforeEach(module('phoneDetail'));

	// Test the controller
	describe('phoneDetailController', function(){

		var $httpBackend, ctrl;

		beforeEach(inject(function($componentController, _$httpBackend_, $routeParams){
			$httpBackend = _$httpBackend_;

			$httpBackend.expectGET('phones/xyz.json').respond({name: 'phone XYZ'});
            $routeParams.phoneId = 'xyz';

			ctrl = $componentController('phoneDetail');
		}));
		
		it('should fetch the phone details', function(){
			expect(ctrl.phone).toBeUndefined();

			$httpBackend.flush();
			expect(ctrl.phone).toEqual({name: 'phone XYZ'});
		});
		
	});
});
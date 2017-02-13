describe('PhoneListController', function(){
	//Before each test we tell AngularJS to load the phonecatApp module.
	beforeEach(module('phonecatApp'));
	//We ask AngularJS to inject the $controller service into our test function.
	it('should create a "phone" model with 3 phones',
		inject(function($controller){
			var scope = {};
			//We use $controller to create an instance of the PhoneListController.
			var ctrl = $controller('PhoneListController',{$scope: scope});

			expect(scope.phones.length).toBe(3);
		}));
});
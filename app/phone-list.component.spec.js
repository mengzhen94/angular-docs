

describe('phoneList', function(){
	//Before each test we tell AngularJS to load the phonecatApp module.
	beforeEach(module('phonecatApp'));

	describe('PhoneListController', function(){
	
	//We ask AngularJS to inject the $controller service into our test function.
	it('should create a "phone" model with 3 phones',
		inject(function($componentController){
			//We use $controller to create an instance of the PhoneListController.
			var ctrl = $componentController('phoneList');

			expect(ctrl.phones.length).toBe(3);
		}));
	});
});
'use strict';

describe('checkmark', function(){
	// Load the module that contains the `phoneList` component before each test
	beforeEach(module('core'));

	it('should convert boolean values to unicode checkmark or cross',
		inject(function(checkmarkFilter){
			expect(checkmarkFilter(true)).toBe('\u2713');
			expect(checkmarkFilter(false)).toBe('\u2718');
		})
	);
});
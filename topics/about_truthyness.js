// k.c. my notes: 2
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equal(true, oneIsTruthy, 'is one truthy?');
});

test("truthyness of negative numbers", function() {			// k.c. -1 is true
    var negativeOneIsTruthy = -1 ? true : false;
    equal(true, negativeOneIsTruthy, 'is -1 truthy?');
});

test("truthyness of zero", function() {									// k.c. 0 is false
    var zeroIsTruthy = 0 ? true : false;
    equal(false, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equal(false, nullIsTruthy, 'is null truthy?');
});

// k.c. my notes: 3
module("About Regular Expressions (topics/about_regular_expressions.js)");

test("exec", function() {
    var numberFinder = /(\d).*(\d)/;
    var results = numberFinder.exec("what if 6 turned out to be 9?");
    ok(results.equalTo(['6 turned out to be 9', '6', '9']), 'what is the value of results?'); // k.c. let me note on this result format. It returns numbers in string...
});

test("test", function() {
    var containsSelect = /select/.test("  select * from users ");
    equal(true, containsSelect, 'does the string provided contain "select"?');
});

test("match", function() {
    var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    ok(matches.equalTo(['6', '9']), 'what is the value of matches?'); // k.c. the returned numbers should be in string.
});

test("replace", function() {
    var pie = "apple pie".replace("apple", "strawberry");
    equal('strawberry pie', pie, 'what is the value of pie?');

    pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) { // the second parameter can be a string or a function
        var map = {'6': 'six','9': 'nine'};
        return map[number]; // k.c. this is really interesting use of map.
    });
    equal('what if six turned out to be nine?', pie, 'what is the value of pie?');
});

// THE END

// testing map()

test("map() should return an array with the same number of elements", () => {
	const result = map([1], () => {});
	equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
	const result = map([1], (x) => x + 1);
	equal(result[0], 2);
});

// testing filter()

test("filter returns the passed array if all elements return true for the filter function", () => {
	const result = filter([1, 2, 3], (e) => e < 4);
	equal(result[0], 1);
	equal(result[1], 2);
	equal(result[2], 3);
});

test("filter returns an empty array if no elements pass the filter function", () => {
	const result = filter([1, 2, 3], (e) => e > 4);
	equal(Array.isArray(result) && result.length === 0, true);
});

test("filter returns an array containing only the elements that pass the test", () => {
	const result = filter([1, 2, 3], (e) => e < 3);
	equal(result[0], 1);
	equal(result[1], 2);
	equal(result[2], undefined);
});

/*
test("", () => {

});
*/

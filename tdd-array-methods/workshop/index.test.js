// testing map()

// test("map() should return an array with the same number of elements", () => {
//   const result = map([1], () => {});
//   equal(result.length, 1);
// });

// test("map() should transform each element of the array using the fn argument", () => {
//   const result = map([1], (x) => x + 1);
//   equal(result[0], 2);
// });

// testing filter()

test("filter takes an array and function", () => {
	equal(filter(), "please pass an array");
	equal(filter([]), "please pass a function");
});

test("filter returns an array", () => {
	result = filter([], () => {});
	equal(Array.isArray(result), true);
});

test("elements from original array appear in filtered array", () => {
	result = filter([1, 2, 3], () => {});
	equal(result[0], 1);
	equal(result[1], 2);
	equal(result[2], 3);
});

test("passed function is called for an element", () => {
	result = filter([1], (e) => "a");
	equal(result[0], "a");
});

/*
test("", () => {

});
*/

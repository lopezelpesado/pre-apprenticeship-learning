test("check the url function works", () =>
	equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu"));

test("check search param object works", () => {
	equal(
		searchParamsToObject("name=oliver&email=hello@oliverjam.es").name,
		"oliver"
	);
	equal(
		searchParamsToObject("name=oliver&email=hello@oliverjam.es").email,
		"hello@oliverjam.es"
	);
});

test("check leap years are working", () => {
	equal(isLeapYear(2020), true);
	equal(isLeapYear(2000), true);
	equal(isLeapYear(1900), false);
	equal(isLeapYear("2020"), false);
	equal(isLeapYear(-2020), false);
});

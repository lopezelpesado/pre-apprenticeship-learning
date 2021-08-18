// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
	return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(formString) {
	return Object.fromEntries(new URLSearchParams(formString));
}

function isLeapYear(year) {
	if (typeof year === "number") {
		if (year % 4 === 0) {
			if (year % 100 !== 0) {
				return true;
			} else if (year % 400 === 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
}

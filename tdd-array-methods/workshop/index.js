// function map(array) {
//   return array;
// }

function filter(arr, fn) {
	if (!Array.isArray(arr)) {
		return "please pass an array";
	}

	if (typeof fn !== "function") {
		return "please pass a function";
	}

	const result = [...arr];
	return result;
}

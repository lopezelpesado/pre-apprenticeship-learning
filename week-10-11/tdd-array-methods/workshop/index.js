function map(array, fn) {
	const result = [];
	for (e of array) {
		result.push(fn(e));
	}
	return result;
}

function filter(arr, fn) {
	// if (arr.every((e) => fn(e))) {
	// 	return arr;
	// } else if (!arr.some((e) => fn(e))) {
	// 	return [];
	// } else {
	const result = [];
	for (e of arr) {
		if (fn(e)) {
			result.push(e);
		}
	}
	return result;
	// }
}

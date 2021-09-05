test("add numbers", () => {
	equal(calculate(1, "+", 1), 2);
	equal(calculate(-1, "+", 1), 0);
	equal(calculate(1.5, "+", 2.75), 4.25);
});

test("subtract numbers", () => {
	equal(calculate(1, "-", 1), 0);
	equal(calculate(-1, "-", 1), -2);
	equal(calculate(3.5, "-", 2.75), 0.75);
});

test("multiply numbers", () => {
	equal(calculate(3, "*", 3), 9);
	equal(calculate(-1, "*", 1), -1);
	equal(calculate(3.5, "*", 2.75), 9.625);
	equal(calculate(-1, "*", 0), 0);
});

test("divide numbers", () => {
	equal(calculate(1, "/", 1), 1);
	equal(calculate(-1, "/", 1), -1);
	equal(calculate(3.5, "/", 1.25), 2.8);
});

test("operates with number strings", () => {
	equal(calculate("1", "+", "1"), 2);
	equal(calculate("1", "-", "10"), -9);
	equal(calculate("8", "*", "2"), 16);
	equal(calculate("4", "/", "2"), 2);
});

test("won't accept invalid operator", () => {
	equal(calculate(1, "a", 1), "Please enter a valid sign (+, -, *, /)");
	equal(calculate(1, "1", 1), "Please enter a valid sign (+, -, *, /)");
	equal(calculate(1, "'", 1), "Please enter a valid sign (+, -, *, /)");
	equal(calculate(1, "", 1), "Please enter a valid sign (+, -, *, /)");
	equal(calculate(1, 1, 1), "Please enter a valid sign (+, -, *, /)");
});

test("accepts valid operators", () => {
	notEqual(calculate(1, "+", 1), "Please enter a valid sign (+, -, *, /)");
	notEqual(calculate(1, "-", 1), "Please enter a valid sign (+, -, *, /)");
	notEqual(calculate(1, "*", 1), "Please enter a valid sign (+, -, *, /)");
	notEqual(calculate(1, "/", 1), "Please enter a valid sign (+, -, *, /)");
});

test("user input calculations", () => {
	let form = document.getElementsByTagName("form")[0];
	let firstNo = form[0];
	let sign = form[1];
	let secondNo = form[2];
	let submit = form[3];
	let output = form[4];

	test("addition", () => {
		equal(
			(() => {
				firstNo.value = "1";
				sign.value = "+";
				secondNo.value = "1";
				submit.click();
				let result = parseFloat(output.textContent);
				output.textContent = "";
				return result;
			})(),
			2
		);
	});

	test("subtraction", () => {
		equal(
			(() => {
				firstNo.value = "3";
				sign.value = "-";
				secondNo.value = "2";
				submit.click();
				let result = parseFloat(output.textContent);
				output.textContent = "";
				return result;
			})(),
			1
		);
	});

	test("multiplication", () => {
		equal(
			(() => {
				firstNo.value = "4";
				sign.value = "*";
				secondNo.value = "2";
				submit.click();
				let result = parseFloat(output.textContent);
				output.textContent = "";
				return result;
			})(),
			8
		);
	});

	test("division", () => {
		equal(
			(() => {
				firstNo.value = "5";
				sign.value = "/";
				secondNo.value = "2";
				submit.click();
				let result = parseFloat(output.textContent);
				output.textContent = "";
				return result;
			})(),
			2.5
		);
	});
});

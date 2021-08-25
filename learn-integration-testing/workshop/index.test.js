equal(calculate(1, "+", 1), 2);
equal(calculate(2, "-", 1), 1);
equal(calculate(2, "*", 2), 4);
equal(calculate(4, "/", 2), 2);
equal(calculate(1, "a", 1), "Please enter a valid sign (+, -, *, /)");

equal(calculate("2", "+", "2"), 4);

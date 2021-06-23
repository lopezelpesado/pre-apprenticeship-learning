# Execute Program Learnings

## 18/6/21

### Modern JavaScript: Strict Mode

- I've learned from this [Execute Program (EP) guide](https://www.executeprogram.com/courses/modern-javascript/articles/how-to-run-javascript-code) that I can run my JavaScript (JS) using Node.js from my Linux terminal. If I type `node --use_strict`, it'll open up a REPL in strict mode (what EP use) and if I add a JS file name at the end it'll run that file in strict mode, nice!
- Apparently we rarely want global variables (like `x = 1`) and "strict mode" prevents this.
- You can enable strict mode by putting `"use strict"` at the top of a module or function.
- Most JS compilers automatically insert this.
- Strict mode is part of an attempt to modernize JS by disallowing old and confusing behaviours.
- Base 8 is called octal and JS supports numbers in it. Using octals in stirct mode throws errors.
- In strict mode, `delete` can be used to completely remove a key from an object. It could also be used to delete an entire variable but this causes an error in strict mode. you can't delete `Object.prototype` because that would be very bad.

## 21/6/21

### Review

#### Strict Mode

- Strict mode prevents global variable declartions such as `x = 1`, will return an error
- Also prevents deletion of entire variables

### Modern JavaScript: Let

- Local variables used to be declared with the `var` keyword. Inside a function, it's only visible in the function. `var` can be used in strict mode
- Trying to reference a local variable outside of the scope in which it's defined will give an error
- `var`s are "function-scoped" and visible to the entire function body
- `var` inside an `if` block inside a function is also visible outside the block to the rest of the function
- This is not good, variables inside `if`s should only be visible inside the `if`
- The `let` keyword fixes this
- Variable shadowing is when a certain scope has the same name as a variable outside that scope
- We don't need a construct like `if` or `while` to create a new scope. Any code within `{}` will have its own scope

## 22/6/21

### Review

#### Let

- `let` is block scoped and so a variable declared with `let` inside a block (`{}`) is not available outside it
- Similarly, `const` is also block scoped

### Modern JavaScript: Const

- Variables defined with `const` can't be reassigned
- However, the value assigned to the variable can be mutated (changed)
- `const` applies to the variable and not its value
- We can shadow `const`, define variables with the same name in different scopes#
- `var` doesn't need to be used and can be replaced with `let` and `const`
- You can configure your linter (code analyser that flags errors and bugs) to disallow `var` and force you to use `const` for variables that are never reassigned, recommended

### Modern JavaScript: For of loops

- `for...in` loops iterate over an object's keys and not values
- This can cause strange edge cases
- Arrays are a special kind of object and `typeof` on an array will return `"object"`
- An arrays keys are their indexes as strings
- An array can be "sparse", they can have indexes with nothing in them at all
- `for...in` skips missing array elements, if we have an empty array `arr = []` and put a value at index 3 `arr[3] = "a"` then a `for...in` would return ["3"]
- This can cause bugs when not expected
- `for...of` is better as it loops over the values not the keys
- With a "sparse" array, it will loop over the missing indexes and return `undefined`
- We can iterate over the keys of an object like `for...in` does by using `for...of` on an `Object.keys()` array of the object
- `for...of` can be used to iterate over strings, will handle each character as a string with length 1
- Linters can stop you from using the old `for...in` syntax

### Modern JavaScript: Template literals

- JS has 2 syntaxes for strings `"string"` and `'string'`, but wait! There is a third, `` `string` `` with backticks `` ` ``
- The third type are called "template literals"
- "Interpolation" (inserting something into something else) is the most common use
- Wrapping an expression with `${}` will insert the result of that expression into the string
- `${}` converts the value to a string by calling its `.toString()` method, probably won't do what we want with arrays and definitely not with objects
- We can use `${}` as many times as we want in a template literal
- Escaping works inside template literals
- Strings can't have newlines in them
- Template literals can
- Template literals will include all whitespace, including indentation. Not normally a problem between HTML tags

## 23/6/21

### Review

#### For of loops

- `for...of` loops don't skip missing indexes

#### Template literals

- `${}` (interpolation) will return the `.toString()` of the expression inside
- Template literals keep newlines

#### Const

- `const` is block scoped (not accessible outside the scope it is declared in)
- It can also be shadowed (have 2 variables with the same name in different scopes)
- `const` can't be reassigned

### Modern JavaScript: Rest parameters

- JS functions can take a variable number of parameters which can be achieved using `...` (rest parameter, called varargs in other languages or variable number of arguments)
- Arguments will show up as a single array of the arguments passed
- Can be used in conjuction with regular parameters but not after a rest parameter (doing so will throw an error)
- You can only have 1 rest parameter, multiple will throw an error
- Can also be used when calling functions to pass all the elements of an array (for example) into a function as seperate arguments
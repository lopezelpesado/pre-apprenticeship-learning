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

### Modern JavaScript: Review

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

### Modern JavaScript: Review

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

### Modern JavaScript: Review

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

### Modern JavaScript: Accessors in object literals

- Object properties' values can't change over time unless we modify the object with normal object syntax
- You can have objects with dynamic properties, instead of a fixed value they hold a function that is called when the property is accessed
- Instead of a property name in an object you have `get` followed by a function
- These properties are called getters
- There are also setters, these write to objects
- Writing to an object's key replaces the value at the key
- A setter property contains a function like a getter but the function takes one argument, the value being written to the key
- Reading the value of a setter returns `undefined`
- You can combine a getter and setter in one object, one handles getting and the other handles setting
- You can use setters to track changes over time, code can modify an object in the normal way but the setter can keep track of what happened
- `get` and `set` are required otherwise a function will be called in the normal way

### Modern JavaScript: Computed properties

- In an object, we can write keys as unquoted words
- We can have computed keys by wrapping the key in `[]`
- A computed key can contain any expression

### Modern JavaScript: Shorthand properties

- Historically, the key of an object refers to a variable of the same name
- We can shorten this when an object's key refers to a variable of the same name, instead of `{name: name}` we can just write `{name}`
- You can't refer to a variable that doesn't exsist as this will throw an error

### Modern JavaScript: isNaN

- `NaN` is a problem in JS
- NaN means Not a Number
- Originally wasn't supposed to be used a lot, `0/0` should return `NaN`, but JS returns it a lot.
- Arithmetic on `undefined` return `NaN`
- Operating on `NaN` returns `NaN`
- JS returns `NaN`s when it doesn't need to, other languages don't do this
- `NaN`s can be checked for with the `isNaN` function
- `isNaN` converts arguments to numbers before checking
- `isNaN(undefined)` returns `true` because any arithmetic on `undefined` produces `NaN`
- `Number.isNaN` fixes this
- You can use linters to disallow `isNaN`

### Modern JavaScript: Generators

- `for...in` loops only work with arrays and strings, `for...of` is newer but seems to have the same limitation
- Can't iterate over an object
- You can write new functions and objects that work with for loops
- A `*` after `function` denotes a generator
- When you call a generator, you get an object that can be looped over
- Each `yield` in the generator provides one value to the loop
- Yield works like return but the function continues after each yield
- Generators are functions so can contain code normally found in a function

## 24/6/21

### JavaScript Arrays: Basics

- Arrays are sequences of values that have a specific order and length
- Values can be retrieved from arrays using `[]`
- Indexes start at 0
- Array elements can be replaced by retrieving them with `[]` and assigning them with `=`

### JavaScript Arrays: Stack

- Elements can be added to the end of arrays with `push`
- `push` returns the new array's length
- `pop` is the opposite of `push` and removes elements from the end
- `pop` returns the removed element
- Some array methods return a new array whereas `push` and `pop` modify the array when called

### JavaScript Arrays: For each

- `forEach` executes a function once for each element in an array
- `forEach` can be used to modify an array's elements
- The callback function can reference and modify variables defined in outer scopes
- The second argument to `forEach`'s callback is the current item's index
- Functions can be stored in variables and variables can be passed to `forEach`

### JavaScript Arrays: Slice

- `slice` allows us to acces just smol bit of an array
- First argument is where to begin
- Second is where to end (not inclusive)
- Slicing beyond the end of an array is the same as slicing right up to the last element (inclusive)
- If the start is past the end of the array, we get an empty result
- With no arguments, `slice` slices the lot and gives you a copy of the array
- `slice` is commonly used for copying arrays

### JavaScript Arrays: Slice with negative arguments

- `slice` can take negative indexes which you can think of `array.length - i`
- Slicing before the start of an array will give you the whole array
- Both parguments can be negative, the second index is not included in the slice

## 25/6/21

### JavaScript Arrays: Review

#### Slice

- First argument is where to start from, 2nd is where to go up to but not include
- You can use a negative number with `slice` and that will count from the end
- Starting at an index below 0 will copy the whole array
- Altering a copy made with slice does not alter the original
- Calling slice with arguments outside the range of indexes of an array will return an empty array

#### Stack

- `pop` removes and returns the element from the end of an array
- `pop` alters the array it's called on
- `push` adds the element to the end of an array and returns the new length

#### For each

- You can access outer scope variables inside a `forEach`

#### Basics

- You can access an element in an array with `array[n]` where n is the index of the element you want
- You can replace elements at specific indexes in arrays like this `array[index] = newThing`

### Modern JavaScript: Review

#### Strict Mode

- Can't delete variables in strict mode
- Can't define global variables

#### isNaN

- `undefined` will return true for `isNaN` because `isNaN` performs arithmetic on `undefined` which results in `NaN`
- `Number.isNaN` does not have this problem and should be used instead
- `isNaN` can be used to check if something is `NaN`

#### Rest parameters

- Using `...` and an array in place of arguments for a function will pass each element in the array to the function in order
- Defining a function parameter with `...` means that you can pass any number of arguments to it that will appear in the function as an array
- You can't have a parameter after a `...`

#### Generators

- Generator functions are denoted with a `*` at the end of `function`
- You use `yield` instead of return
- Can turn the `yield` from a generator function into an array with `Array.from(generatorFunction())`

#### Computed properties

- You can use `[]` to set the property of an object with the result of what is inside the `[]`

#### Shorthand properties

- You can create an object which has properties with values the same as predefined variables like this `let name = "something"; let obj = {name}; obj === {name: "something"}`

### Modern JavaScript: Basic array destructuring

- Historically, working with arrays and objects was clunky
- Destructuring makes it easier by using the structure of arrays
- You can assign the elements of an array to new variables by using their order `let arr = [1, 2, 3]; let [e1, e2] = arr` now `e1 === 1` and `e2 === 2`
- Can skip indexes by leaving them blank (called sparse array destructuring) `let [e1, , e3] = arr`
- Trying to destructure a value that doesn't have structure will result in an error
- If there aren't enough indexes, the excess indexes will get `undefined`. `let [e1, e2, e3, e4] = arr` now `e4 === undefined`
- We can provide defaults if the array or object doesn't have something at the index with this syntax `e4 = 4`
- You can mix and match elements without defaults
- We can get remaining elements with `...`, `let [e1, ...remains] = arr` now `remains === [2, 3]`
- `...` are always returned as an array
- `...` has to go last, otherwise you will get an error
- Strings can be destructures with each "element" being each character as a string of length 1

## 28/6/21

### Modern JavaScript: Review

#### Template literals

- `` ` `` denote template literals
- `${}` will return the `.toString()` of the result of the expression within the brackets

#### Basic array destructuring

- Using destructuring with a number of variables greater than the length of the array being destructured will result in the variables at indexes greater than the length being assigned `undefined`
- You can use `...` to assign the rest of an arrays elements to a new array
- Can skip assigning indexes by just omitting a variable name at that index

#### Let

- `let` is block scoped and can't be accessed outside of scope
- `let` can be shadowed (variable with the same name in a different scope)

#### Const

- `const` can't be reassigned

#### For of loops

- Will loop over empty indexes and return `undefined` for them

### JavaScript Arrays: Arrays are objects

- JS is unusual because arrays are objects
- This doesn't affect normal use of arrays
- This causes weird things though like the fact we can assign to aritary properties of arrays
- Adding arbitary properties of arrays doesn't change the length
- Adding arbitary properties is usually a mistake
- Arbitary properties are unexpected
- best to use an object rather than have arrays with arbitary properties
- `forEach` will ignore arbitary properties of arrays
- `Object.keys` on an array with arbitary properties will return them

### JavaScript Arrays: Map

- `map` calls a function on each element of an array and returns the results as new array
- `map` doesn't change the original array

### JavaScript Arrays: Join

- `join` without arguments joins with `,`
- `null` and `undefined` become empty strings with `join`
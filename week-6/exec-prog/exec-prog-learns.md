# Week 6 Execute Program Learnings

## 23/7/21

### JavaScript Arrays: Find

- `.findIndex` finds and returns the index of a described element
- `.find` returns the element itself

### JavaScript Arrays: Reduce right

- `reduce` goes left to right
- `reduceRight` goes right to left
- makes no difference for summing
- does matter for subtraction

### JavaScript Arrays: Negative array indexes

- `slice` takes negative array indexes which means count from the end
- doesn't work for normal array access like `arr[-1]`, returns `undefined`
- we can store a value at `-1` index however this is converted to the string `"-1"`
- looping over the array with `.forEach` won't see the `"-1"` index as it's not an array index just an object property
- This can cause bugs

## 26/7/21

### Modern JavaScript: Nested destructuring

- You can destructure nested arrays
- `let yeet = [1, [2, 3]]; let [, [, x]] = yeet;`, here `x` is now 3
- can do something similar with nested objects
- can combine destructuring for arrays with objects and vice versa
- destructuring is useful because of predictability
- Some methods change the array or object, others don't
- destructuring can never modify the destructured object

### Modern JavaScript: Arrow functions

- JS supports functions without names
- using `function` syntax to define callbacks is awkward
- modern JS supports arrow functions, so called because the operator looks like an arrow `=>`
- when a function takes exactly 1 argument we can just do `x =>` otherwise we need parentheses `(x, y) =>` or `() =>`
- supports rest parameters and destructuring, using those features requires `()` even if only one is used
- can write multi line functions using `{}`
- one liners implicitly return the value of the right hand side of the `=>`
- multi liners don't so we need a `return`
- if you forget, it'll return `undefined`
- to return an object with a single liner, wrap the object in `()` otherwise it won't work
- scoping rules are easier to think about with arrow functions
- arrow functions see the same scope as their parents

## 27/7/21

### Modern JavaScript: Classes

- classes can be defined with `class ClassName {}`
- classes describe what properties and methods it has
- class method definations look like `methodName() {}`
- construct a class with `new MyClass()`
- it's an object with all the properties and methods of the class
- classes can have constructors which are special methods that initialize the object
- objects made by classes are instances of teh class
- when instances are created we are instantiating the class into a specific instance
- classes can contain methods which are included in the instances, they can access the instance's props with `this.prop`
- you can't call an instance method on the class itself and doing so will throw an error
- need to use `new` to instantiated a class, calling the class will throw an error

### Modern JavaScript: Function name property

- `function f()` means we can use the variable `f` to refer to the function
- functions declared like this have a `name` prop, for the above this is `'f'`
- anon functions have no name and the name property will be an empty string `''`
- you can assign an anon function to a variable and then the variable name will be the function's name, still called anon functions though
- functions remember their original name even when assigned to a different variable
- anon funcs only get a name when assigned directly to a variable, if put in an array they won't take the array's name and still have no name
- arrow funcs are always anon
- they can get a name if assigned directly to a variable

### Modern JavaScript: JSON stringify and parse

- modern versions of JS have JSON support
- `JSON.stringify(object)` turns the `object` into a JSON string
- `JSON.parse(JSONstring)` turns the `JSONstring` into an object
- tryign to pass something that isn't a JSON string will throw an error
- JSON stands for JS object notation
- not all JS object syntax is valid JSON
- eg, JSON keys require `""`
- you can parse and stringify arrays, strings and numbers
- undefined is not allowed in JSON
- stringifying `undefined` results in `null` so parsing something that was stringified with `undefined` will replace that with `null` and you wouldn't know that it was originally `undefined`
- JSON can't represent circular objects (objects that ref themselves)
- `toJSON` property on an object can tell `stringify` to use the result of a specified function as it's output instead
- `toJSON` doesn't do the stringification, it returns a new object that will be stringified

### Modern JavaScript: New number methods

- `Number.isFinite` checks that a value is not `Infinity` or `-Infinity`
- passing a non number like `NaN` will return false
- Numbers in JS are floating point so become inprecise past a certain threshold
- `Number` `.MIN_SAFE_INTEGER` and `.MAX_SAFE_INTEGER` help with this
- they define the smallest and largest numbers that can be safely treated as integers
- integers between these numbers behave normally
- `Number.isSafeInteger` checks both upper and lower bounds
- passing a non number will return false
- previously `Math.pow` was used for exponentiation but now you can use the `**` operator

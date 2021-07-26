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

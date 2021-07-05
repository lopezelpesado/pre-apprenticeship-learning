# Week 2 Execute Program Learnings

## 30/6/21

### JavaScript Arrays: Review

#### Map

- `map` returns a new array with the results of the callback function on each element of the original array
- `map` does not alter the original

#### Stack

- `push` adds an element to the end of an array and returns the length
- `pop` removes and returns the element from the end of an array
- `pop` and `push` modify the array

#### Join

- `join` returns a string of an arrays elements joined by the passed string, or `,` if no arguments are given
- `null` and `undefined` become empty strings

#### Basics

- Arrays declared with `const` can still have elements changed

#### Slice and Slice with negative arguments

- `slice` will copy an array if the starting argument is 0 or less than 0
- The first argument is where to start from
- Without a second argument, the start index to the end of the array will be returned as a new array
- Arguments outside the range of the indexes will return an empty array
- The last argument is where to end but not include
- Negative arguments count from the end of the array
- Copying with slice will create a copy that, when modified, doesn't affect the original

#### Arrays are objects

- Assigning an array an arbitrary property will not change its length
- `typeof []` will return `"object"`

#### For each

- `forEach` can reference a variable outside of it
- It will call the callback function once for each element of an array

### JavaScript Arrays: Concat

- `array + array` won't work in JS and will result in the arrays being converted to strings before adding
- Converting an array to a string will return the elements separated by commas
- Use `concat` (concatenate) to compbine arrays
- Creates a new array with all the elements from the concatenated arrays
- `concat` takes multiple arguments so we can combine many arrays
- Can add elements to the end of an array by using an argument that isn't an array
- `concat` builds and returns a new array so the originals aren't changed

### JavaScript Arrays: Includes

- `includes` checks if an array contains an element and returns `true` or `false`

### JavaScript Arrays: Index of

- `indexOf` gives the index of a particular element
- If the elelment appears multiple times, we'll get the index of the first one
- If the element isn't there, we get `-1`
- It's important to check your `indexOf`s for `-1`s or you can get bugs

### JavaScript Arrays: New and fill

- `fill` fills an array full of a given value
- You can create an array with a given length but with nothing in it `new Array(size)`
- You can then fill it with values
- You can use this to make progress bars

### JavaScript Arrays: Sort

- `sort` sorts elements into a sorted order
- It changes the array it's called on
- It returns the sorted array
- `slice` then `sort` will create a copy then sort the copy, not affecting the original
- JS compares strings character by character, the comparison ends as soon as 2 charactres differ so `"10" < "3"` because the `"0"` is never looked at
- `sort` converts elements to strings and then compares, makes it unsafe for numbers (other languages don't have this problem)
- You can fix this by writing your own comparison function that can be passed to `sort`
- You can compare by argument properties like length or a key of an object

### JavaScript Arrays: flat and flatMap

- "Flattening" involves turning a nested array into a single array
- `flat` does this for us
- It only does 1 level of arrays by default
- Can provide a depth level argument to go deeper
- Depth can be `Infinity` which will flatten everything
- Flatten only works on arrays, an array with an object with arrays in will leave the arrays in the object untouched
- `flat` often goes with `map`
- We can use `flatMap` instead
- `flat` and `flatMap` return a new array leaving the original untouched

## 1/7/21

### Modern JavaScript: Review

#### Basic object destructuring

- We can destructure objects like arrays
- We can destructure a getter key which will assign the result of the function to the variable
- `...` can be used to return the rest of the keys in a new object

#### Shorthand methods

- Object keys can be functions
- These functions can reference the object's properties with `this.property`

### Modern JavaScript: Places where destructuring is allowed

- Destructuring works in function definitions in the same way it works elsewhere
- You can destructure an object or array into a single variable to be used in a function
- You can also use destructuring in for of loops
- Can be used in `catch` block (I don't know what that is right now though)

### Modern JavaScript: Bind

- `this` refers to the object which a function belongs to
- Scoping rules for `this` in JS are tricky
- Sometimes we want to force `this` to mean something specific
- We can do this with `bind`
- `bind` is a method we can call on functions to create a new function where `this` is bound to a specific value, `someFunction.bind(newThis)`
- `bind` should be used sparingly and should be used as a last resort
- Usually there is a better method to deal with a scoping problem

## 2/7/21

### JavaScript Arrays: Review

#### New and fill

- You can create a new and empty array of a given length with `new Array(length)`
- Calling `.fill(element)` imeddiately after will fill your new array with the given element

#### flat and flatMap

- `flat` flattens down a given depth
- `Infinity` can be used for depth to completely flatten an array with an unknown level of depth
- Objects and their values are not flattened, an array inside an object inside an array will not be flattened
- Doesn't alter the original
- `flatMap` can be used to `map` then `flat`en the result

#### Includes

- Includes returns `true` or `false` depending on whether or not the given element appears in an array

#### Index of

- `.indexOf` returns the index of the firs occurence of a given element or `-1` if the element does not appear in the array

#### Sort

- `.sort` returns the array sorted in place, doesn't make a copy and alters the original
- By default, sort converts the elements to strings and compares them 1 character at a time and moves on to the next number where a difference is encountered so numbers can get sorted by just the first number
- You can provide your own sort function for a custom sort

#### Concat

- `.concat` joins a given array to the array it's called on and returns the new array
- It doesn't alter the originals

### JavaScript Arrays: Some and every

- `some` checks to see if a function is true for any element in an array
- It returns `true` if any element satisfies the condition or `false` if none of them do
- `some` always returns `false` for an empty array
- `every` is similar but it only returns `true` if all elements satisfy the condition
- `every` returns `true` for an empty array
- There is no `none` in JS but we can use `!some` instead
- We could define our own function for `none`

## 5/7/21

### JavaScript Concurrency: setTimeout

- `map` is synchronous, it always processes elements one at a time and in order
- Asynchronous code doesn't all run at once and in order
- It schedules code to run in the future
- Asynchronous means "outside of normal execution order"
- `setTimeout` is the simplest way to run code asynchronously
- `setTimeout(someFunction, 1000)` will call `someFunction` 1 second in the future
- No code runs, the CPU is idle, whilst the `setTimeout` timer is counting down
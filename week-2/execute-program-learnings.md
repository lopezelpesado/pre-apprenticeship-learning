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
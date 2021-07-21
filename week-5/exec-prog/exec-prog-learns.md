# Week 5 Execute Program Learnings

## 21/7/21

### JavaScript Arrays: Reduce

- Sometimes we want to apply a function many times and `reduce` allows us to do this
- "reduces" lots of numbers into 1 number
- Pass 2 args to `reduce`, the function and the initial value
- "Instrument" means to attach a measurement instrument too, good way to learn how something works
- Omitting the initial value will use `arr[0]` as the initial value and the callback won't be called for it
- reducing an empty array with an initial value returns the value
- without an initial value we get an error
- can write `join` as `reduce`
- a complex reduce can be replaced by a loop that can be easier to read

### JavaScript Arrays: Filter

- JS is a procedural language
- in procedural languages, we often make decisions inside loops
- `filter` calls a function on each element on an array, if the fuction returns `true` it keeps that element and if not it discards it
- `filter` returns a new array and the original is not altered

### JavaScript Arrays: Find index

- `indexOf` gives us the index of a given element
- `findIndex` can be used when we don't know the complete value of an element
- A function is passed and the index of the first element that returns true for the function is returned
- the callback has 3 args but you usually only use the 1st, current element
- 2nd is the element's index
- 3rd is the whole array, not usually used
- if no elements match, findIndex returns `-1`
- this can be a source of bugs so you should check for -1

### JavaScript Arrays: Shift

- `shift` and `unshift` are the `push` and `pop` for the beginning of an array
- `shift` removes and returns the first element
- `unshift` add an element to the beginning and returns the new length
- `shift` shifts all the indexes down 1, `unshift` does the opposite

### JavaScript Arrays: Reverse

- `reverse` reverses an array
- Sometimes useful with sorting
- `reverse` changes the array its called on

### JavaScript Arrays: Empty slots

- a `new Array` array appears to be full of `undefined`
- But it doesn't have `undefined` in it, it is empty! Nothing is in the slot but JS has nothing for nothing so `undefined` is returned
- `in` can be used to see what's in an empty array slot
- `fill` with `new Array()` is a good way to avoid empty arrays
- Empty slots can cause bugs, `forEach` will skip over empty slots and the function won't be called for them
- `map` behaves similarly with empty slots, as do `reduce` and `filter`
- You should avoid empty slots
- Use `fill` after `new Array`
- Don't write to indexes past the end of an array
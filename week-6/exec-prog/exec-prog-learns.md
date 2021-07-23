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
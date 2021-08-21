# Week 9 Execute Program Learnings

## 21/8/21

### JavaScript Concurrency: setTimeout

- concurrency is 2 or more events happening at the same time
- `map` is synchronous, processes elements 1 at a time
- when it returns, the result is complete
- async codes doesn't run all at once beginning to end
- async code schedules code to run in the future
- `setTimeout` is the simplest example
- can run code after a set amount of time
- "to instrument" means attach measurement instruments to code to see what it's doing

### JavaScript Concurrency: setTimeout and functions

- `setTimeout` works inside functions etc
- usually want async code in their own functions
- better for bug fixing

### JavaScript Concurrency: Concurrent setTimeouts

- `setTimeout` can have interval of 0
- this will execute as soon as the sync code has
- multiple 0 timers will run in the order they were called
- multiple timers of different length will execute chronologically
- a timer can't fire whilst sync code is still being run
- if a timer is up, it'll fire as soon as the syn code is done

### JavaScript Concurrency: Sequential setTimeouts

- timers can be set within timers
- JS engine doesn't run code at the same time

### JavaScript Concurrency: Promise then

- nesting timeouts is hard to read
- promises make that easier
- promises don't have a value property that returns the value
- `Promise.resolve` creates a promise that contains a given value
- `then` also returns a promise
- fulfilled promises contain values
- Promises have no way to directly read their values
- only way to see the value inside a promise is with another `then`

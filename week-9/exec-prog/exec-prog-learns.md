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

## 23/8/21

### JavaScript Concurrency: Promises are asynchronous

- `then` callback are async
- promises run even if nothing waits for them
- creating a promise schedules its callback to run
- `then`s execute in a similar order to timeouts
- promises schedule code to run later and we can add callbacks to them to run when the promise fulfills
- normally you don't want promise callbacks to reach outside their scope

### JavaScript Concurrency: Omitting promise values

- functions with `{}` that don't have a `return` statement will always return `undefined`
- similarly, if we omit `Promise.resolve`'s argument, the promise will contain `undefined`
- `Promise.resolve();` => `{fulfilled: undefined}`
- A `then` with no `return` will return the same thing

### JavaScript Concurrency: clearTimeout

- `clearTimeout` cancels timeouts set with `setTimeout`
- `setTimeout` returns a number (in browsers) or object (in NodeJS) which is the ID of the timer
- passing the return value of a `setTimeout` to `clearTimeout` will cancel that timer
- clearing a timer that has already fired does nothing
- clearing a something that is not a timer does nothing

## 24/8/21

### JavaScript Concurrency: What's inside a promise?

- promises are implemented by the browser
- browser promise internals are not visible to JS
- can be confusing if you serialize a promise into a JSON, native promises will return `{}`
- `Object.assign` (merges one object's props into another) can result in a similar bug
- round tripping an `Error` will result in something similar

### JavaScript Concurrency: setInterval and clearInterval

- `setInterval` calls a function repeatedly until will tell it to stop with a set period between each call
- `clearInterval` clears the interval, like `clearTimeout`
- clearing a finished interval or non-interval does nothing
- providing no interval will default to `0`, which means it will run it as many times as it can
- this mistake can hurt performance

### JavaScript Concurrency: Rejecting promises

- promises have error handling called rejection
- create with `Promise.reject(someReason)`
- the reason arg tells us why the promise rejected
- usually an `Error` object but can be other JS values
- JS has no way to represent literal error objs
- `.toString()` on an `Error` obj will result in `'Error: text'`
- `throw`ing an exception in a `then` converts the exception into a promise rejection, the thrown error becomes the reason
- `then`s chained on a rejected promise will reject with the same reason, the callbacks are never called
- similar to how exceptions work in regular JS, when an exception is thrown, the following lines don't execute
-

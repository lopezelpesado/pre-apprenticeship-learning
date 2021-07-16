# Week 3 Execute Program Learnings

## 7/7/21

### JavaScript Concurrency: Review

#### setTimeout and functions

- `setTimeout(function, ms)` will run a function after a given number of milliseconds

### JavaScript Concurrency: Concurrent setTimeouts

- `setTimeout` with `0` is still asynchronous, code will finish before `setTimeout` is called
- Timers with 0 delay will execute in code order but after other code
- Timers will execute in order of the timers with lowest timer first, regardless of where in the code they appear
- Code takes time to execute so won't run as soon as the timer runs out
- `setTimeout` tells the JS engine to execute the code when it can
- JS engine has a queue of timers and other events which it processes in order

### JavaScript Concurrency: clearTimeout

- We can cancel a `setTimeout` with `clearTimeout`
- In browsers, `setTimeout` returns the ID of the timer as a number
- In NodeJS, it returns an object
- You can pass the result of `setTimeout` to `clearTimeout` to cancel the timer
- Clearing a timer that doesn't exist does nothing
- Calling `clearTimeout` on something that isn't a timer, like `undefined`, does nothing
- Cancelling timers is uncommon but does turn up
- Like an inactivity timer on a banking website, `clearTimeout` can be used to reset a logout timer when the user does something

### JavaScript Concurrency: Sequential setTimeouts

- You can set timers inside other timers
- JS never runs 2 pieces of code at the same time

## 8/7/21

### JavaScript Concurrency: Review

#### clearTimeout

- `clearTimeout` can be used to cancel a timer

#### Concurrent setTimeouts

- You can chain timers with nested `setTimeouts`

### JavaScript Concurrency: Promise then

- Nested timers are hard to read
- It would be great to have a function that waited for the last timer to run instead as it would be easier to read
- JS's promises get close to this
- Promises look like this `Promise.`
- You can have `Promise.resolve(n)` which creates an object with a value of `n`
- You can chain `.then()` after promises to do different things with the `n`
- You can chain a `.then(n => console.log(n))` to then display `n`
- Browsers display promises as `Promise {<fulfilled>: 5}`
- "fulfilled" means the promise contains a value

## 9/7/21

### JavaScript Concurrency: setInterval and clearInterval

- `setInterval` will call a function repeatedly at a given interval until we tell it to stop
- `clearInterval` will stop the given interval
- `clearInterval` does nothing if called on an expired interval or a non interval
- If you set then immediately clear an interval, the code won't run
- If you don't set a delay, it will default to 0 and run as many times as it can
- Doing this will hurt performance
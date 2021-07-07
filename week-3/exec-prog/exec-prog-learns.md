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
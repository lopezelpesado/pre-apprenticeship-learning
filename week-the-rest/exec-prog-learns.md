# Execute Program Learnings

## 6/9/21

### JavaScript Concurrency: Promise constructor

- promises can be created with `Promise.resolve` and `.reject`
- `new Promise` constructor can also create promises
- pass a `resolve` function as an argument to the `new Promise`: `new Promise(resolve => resolve(5));`
- when we call `resolve`, the promise fulfills
- can also create rejected promises with new Promise
- the `resolve` and `reject` function from the constructor is separate to the `Promise.resolve` and `.reject` methods
- the methods don't allows us to use a callback function so are more simple but less useful
- using the constructor, we can delay the resolve call and save the resolve function and use it elsewhere
- the `(resolve, reject) => ...` function is called an executor

### JavaScript Concurrency: Catching promise rejections

- in JS, we recover from exceptions with `catch`
- you can also catch promise rejections but not with `try { ... } catch { ... }`
- promises have a `catch` method
- when a promise rejects, its `catch` callback (if there is one) is called
- behaves like `then` in that they both take callbacks and return promises
- however, `catch` is only called in case of rejection
- `catch` allows you to return a fulfilled promise instead of a rejected one
- `catch` is the most common error handling for promises
- there is another, `then` can take 2 callback functions as arguments
- the 2nd is called when the parent rejects
- generally a rejection is used to indicate that something went wrong, an error
- rejection could also be used as an abort for a promise that takes a long time to resolve

### JavaScript Concurrency: What's inside a timeout?

- timer objects look different in different platforms
- browsers have timers as number IDs where every timer gets a new number
- `setInterval` works the same way, it returns numbers
- when we call `clearTimeout(timer)`, we pass the number back to the browser which looks up the corresponding timer and cancels it
- browsers always use numbers for timers
- Node is different
- Node timers are objects
- timers have no "user serviceable parts" and we shouldn't use them other than passing them to the clear methods

## 8/9/21

### JavaScript Concurrency: Promises resolving to promises

- `Promise.resolve` can create fulfilled promises
- promises can be resolved with other promises
- this doesn't put a promise in a promise but instead flattens the promises
- `const promise2 = Promise.resolve(promise1);`
- when promise1 fulfills, promise2 also fulfills with the same value
- if promise1 rejects, promise2 rejects with the same reason
- `Promise.resolve` can create rejected promises
- promises can be resolved with `Promise.resolve`, the `new Promise` constructor or `then`
- `then`s can have chains of `then`s within them, as long as the callback returns a promise, it'll be flattened

### JavaScript Concurrency: Promise constructor is synchronous

- callbacks passed to `new Promise(...)` are called immediately
- promise `then`s are called async

### JavaScript Concurrency: Promise cleanup with finally

- can use `finally` to run some code regardless of whether or not an exception occurs
- promises have `finally` too as a method on the promise object
- the `finally` method returns a new promise
- unlike `then` and `catch`, `finally` returns a promise that fulfills or rejects with whatever the parent's value was
- `finally`'s callback value is ignored
- `finally` doesn't let us change the value of a promise, just lets us run some code regardless of whether the promise fulfills or rejects

### JavaScript Concurrency: Recovering from rejection

- `catch` callbacks get the rejection reason as an argument
- they can also return values which'll become fulfilled promises
- after `try { ... } catch { ... }`, code will run as the exception was handled
- promise `catch` works in the same way
- `then`s after a `catch` don't need to know that a rejection happened
- any value returned by the `catch` is passed to the next `then`
- handle the most specific errors that you expect, re-throw any other errors
-

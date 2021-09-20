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

## 13/9/21

### JavaScript Concurrency: Saving the resolve function for later

- you can declare a variable and assign a value to it later
- you can write to a global variable from inside a function
- you can do the same thing with the promise constructor's resolve argument
- the resolve function can be assigned to a variable
- when called, the promise will be fulfilled
- we can use this to delay running the resolve function
- promises can be split into 2 parts
- the resolve function can go to one place and the promise itself to another place
- reading the promise with thens will have to wait until the resolve part has been executed
- a promise can only be resolved once, further attempts are ignored

### JavaScript Concurrency: Running promises concurrently

- you can run an API call and then another API call after it but this is not performant
- you could call both of the of the API calls immediately which is better
- you could have a function that waits for all the promises and then collects the results and returns that
- JS already has a function that does this though, `Promise.all`

### JavaScript Concurrency: Control flow with promises

- promises are truthy, using them in a boolean like `if` or `!` will always behave like `true`
- there is no way to synchronously look in a promise
- using them in `if`s doesn't make sense
- conditionals have to go in `then` callbacks

## 14/9/21

### JavaScript Concurrency: Promise.all

- `Promise.all` takes an array of promises and returns a fulfilled promise with an array of all the promises values
- it runs all the promises at the same time
- if 1 of the promises rejects, it rejects with the rejection reason
- if there are multiple rejections, the first in time wins (not in array order)
- the whole thing rejects as soon as any of them reject

### JavaScript Concurrency: Promise states

- promises can be fulfilled or rejected
- promises can take time to fulfill
- whilst a promise is neither fulfilled or rejected, it's pending

### JavaScript Concurrency: Event loops

- browsers have complex event loops that handle promises, `setTimeout`s and other async code

## 16/9/21

### JavaScript Concurrency: Async await

- callbacks let us call a function later
- promises are built on callbacks
- but also let us wait for multiple promises with `Promise.all`
- and abort operations with rejections
- and recover from rejections etc
- async/await is the third major concurrency system is JS
- it doesn't have new capabilities
- it makes promise code easier to read a write
- to use `await`, we have to define an `async function(){}`
- `await` only works with `async`
- `async` is only useful if we use `await`
- async/await still returns a promise
- but you don't have to use `then`s which makes code more readable
- with promises you have to write code in a backward order but with async/await we can write code like we normally would
- we can await promises inside async functions and then use the values in normal code
- the async function will still return a promise though

### JavaScript Concurrency: Promise.allSettled

- `Promise.all` will reject as soon as any promise in it rejects
- `Promise.allSettled` will wait for all of them to settle
- `Promise.all` will reject with the first rejection reason in time
- `Promise.allSettled` uses objects to indicate status and value/reason for fulfilled/rejected promises
- both these functions are often used in prod
- useful when making multiple API requests or writing multiple changes to a database
- `Promise.all` is more common as we usually want things to fail if something goes wrong

### JavaScript Concurrency: Canceling promises

- JS doesn't have support for cancelling async code
- once you have a `then` attached to a promise, there's no way to stop it
- sometimes we need to cancel an operation and we have to implement that ourselves
- one way is to have a canceled flag that is checked, if it's `true` when the `then` runs, we cancel the work
- the cancellation check can be put in a function, an exception can be thrown if the check is true
- you could also have the canceled flag in a database
- some libraries, like Bluebird, have support for cancellation

### SQL: Basic tables

- SQL manages data
- data is stored in tables made up of columns
- we can `CREATE` a table
- `INSERT` data into it
- and `SELECT` data out
- `SELECT *` means give all the columns
- `SELECT` always returns an array of objects
- always returns an array, even if there is only 1
- if there is nothing, `SELECT` return `[]`
- a table can have as many columns as you like
- all SQL statements return arrays
- `CREATE` and `INSERT` just return `[]`
- SQLite's `TEXT` type is used to store strings in columns, these type vary from db to db
- SQL keywords ignore casing and so do table and column names
- common convention is UPPERCASE for keywords, and lower_snake_case for tables and columns
- SQL does respect case within strings
- inserting into a column that doesn't exists throws an error
- any operation on a column that doesn't exist errors

### SQL: Basic column types

- SQL supports other column types
- `INTEGER` is whole numbers
- `REAL` are real numbers stored as IEEE double precision floating point numbers, like the `number` type in JS
- when querying `INTEGER` or `REAL` columns, the value comes back as a JS number
- data types help make sure that data is valid
- this is one of the best things about SQL databases, we get errors when we try to write invalid data

### SQL: Selecting columns

- `*` in `SELECT *` means all columns
- we can also only ask for the columns we care about
- good way to reduce network traffic
- still get an array of rows where each row is an object
- can select multiple columns by separating them with commas

### SQL: Select where

- dbs can have huge numbers of rows
- `SELECT ... WHERE /* condition */` returns only rows where the condition is true
- the standard equality operator is `=`
- you can use different columns with `WHERE` and `SELECT` in the same operation
- when multiple rows match, they're all returned
- SQL supports comparison operators `<` and `>`
- most SQL databases support `!=`, `<>` is the same
- `AND` and `OR` can be used to select by multiple columns
- `WHERE` can match multiple rows
- `WHERE` clauses can call functions
- SQLite has a `length` function that can be used on strings
- PostgresSQL has hundreds
- you can define your own

### SQL: No type enforcement in SQLite

- SQLite is different to other dbs
- it doesn't enforce column types, you can put and integer into a text column
- everything inserted into a text column is converted into a string
- most dbs do enforce types

## 17/9/21

### JavaScript Concurrency: Sleep

- async code can "sleep" (wait an amount of time while doing nothing)
- where possible, separate code that uses promise constructor
- sleep functions are very common
- can be used to delay visual feedback or wait before trying again

### JavaScript Concurrency: Multiple awaits

- async functions can contain more than one `await`
- can be used to clean up nested promises

### JavaScript Concurrency: Control flow with async/await

- control flow with promises can be implemented with conditionals in `then` callbacks
- this gets awkward with nesting
- await allows us to use normal conditionals without `then`

### SQL: Null

- SQL supports null, the absence of a value
- when a column is allowed to be null it is called nullable
- usually all columns are nullable unless specified otherwise
- most dbs do this
- adding `NOT NULL` to a column declaration indicates to the db that a column shouldn't allow null
- `NOT NULL` is important
- SQL dbs won't let you change a column to be `NOT NULL` if it already contains some `NULL`
- once you have unexpected nulls in a db, there is not good way of fixing them
- best to make it not possible in the first place
- best to make columns `NOT NULL` unless you have a very good reason not to
- best to explicitly label nullable columns with `NULL`

### SQL: Updating rows

- `UPDATE` is used to update rows that already exist
- tell it which columns to change with `SET`
- it defaults to updating every row in the entire column
- to update only certain records, we can use `WHERE`
- if the `WHERE` clause in the `UPDATE` matches multiple rows, all will be updated
- be careful to only update what you want to

### SQL: No booleans in SQLite

- most dbs support booleans natively
- SQLite doesn't
- instead use INTEGER columns with 0 meaning false and 1 meaning true

## 20/9/21

### JavaScript Concurrency: Async/await gotchas

- can't use `await` outside an `async function`
- this will cause a syntax error
- you can have an `async` function without an `await`, the return will be a promise
- you can `await` non promise stuff, you get the value immediately
- sometimes you want to do this, this will work if the value is not a promise and if it is

### JavaScript Concurrency: Async/await in arrow functions

- async/await works with arrow functions
- `async` is put before the parameters
- `await` goes in the body as normal
- otherwise they work exactly the same as regular functions

### JavaScript Concurrency: Error handling in async functions

- throwing an exception in a `then` causes a promise to reject
- the exception is turned into a rejected promise
- if you `await` a rejected promise, you get the reverse
- the rejection reason is thrown as a normal JS exception which can be caught
- if the exception is not caught, it's turned into a regular rejected promise
- `async` functions always return promises
- returning a promise in an async will just return the promise, even if it rejects
- always await the promise before returning to be able to catch exceptions if the promise rejects

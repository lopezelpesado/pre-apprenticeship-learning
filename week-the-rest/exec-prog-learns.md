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

### SQL: Selecting expressions

- you can `SELECT` lots of expressions including columns
- you can also `SELECT` constants, mathematical expressions and function calls
- `SELECT 1 + 1` returns `[{'1 + 1': 2}]`
- output is always an array of objects
- props on the row are the expression we selected
- value is the result
- can also query functions that return dynamic values
- in SQLite, the date is `DATE('now')` which is the date after `DATE(0)` (1/1/1970)

### SQL: Unique constraints

- most SQL dbs enforce column types preventing errors
- there are other constraints like unique values only
- `UNIQUE` keyword tells the db to enforce this
- only affects the column it's used on
- you can apply uniqueness to combinations of columns
- you define this at table definition after the column list
- `CREATE TABLE emails (username TEXT, domain TEXT, UNIQUE (username, domain))`
- uniqueness constraints are very important
- constraints, like uniqueness and `NOT NULL`, are an important concept in dbs
- they help prevent bugs that would insert invalid data into the db
- enforcing these constraints is the main job of a SQL db
- the db always checks against constraints before making any change to data
- constraints are also enforced with `UPDATE`

### SQL: Deleting rows

- `DELETE` deletes
- by default, it deletes everything
- great
- be careful with it
- can use `WHERE` clause
- if multiple rows match the clause, they'll all be deleted

### SQL: Defaults

- normally you have to specify all of the columns when inserting a row
- we can define defaults for columns so we don't have to do this
- define with column definitions with `DEFAULT` and then the default value
- when defining columns, type has to come directly after the name of the column
- `NULL` declarations and defaults can be switched around
- specifying a value when inserting into a column with a default value will overwrite the default with the specified value

### SQL: Inserting multiple rows

- when you insert many rows with separate `INSERT` statements, you put a heavy load on a db
- with each request the db has to do lots of different things
- you can mitigate this cost with multi row inserts
- these are written with multiple rows of data after `VALUES`
- this means the db only has to do the associated tasks once for all the new data
- db still enforces constraints

## 21/9/21

### SQL: Column aliases

- columns can be renamed with `AS`
- the result object will use the alias instead of the OG name
- useful in complex queries with multiple tables
- useful for maths queries and cleaning up their results
- allows us to avoid retyping complicated expressions

### SQL: Primary keys

- most dbs have numerical ids to solve the problem of 2 different things having the same name, like to be able to distinguish between 2 people with the same name
- most real world tables have integer ids for ease of reference
- it's better to let the db assign ids for us
- we can do that by making the id column a `PRIMARY KEY`
- in a db, a key is a column or set of columns that are always unique
- if you put a uniqueness constraint on a column, that makes it a key
- if the constraint requires 2 columns together to be unique, that makes them a key
- db systems don't usually care about keys but people do
- dbs do care about primary keys
- the primary key is a key we've declared as the main key for the column
- usually an integer column named id
- making a column a primary key automatically makes it `UNIQUE`
- in most dbs they are also `NOT NULL`
- in SQLite, primary keys are nullable
- to avoid this, make the primary key `NOT NULL`
- most primary keys are auto-incrementing ids, increase by 1 automatically
- in SQLite, `INTEGER PRIMARY KEY` auto-increments
- some dbs require you to specify that
- SQLite will ignore nulls for `INTEGER PRIMARY KEY` and auto-increment instead
- a table can only have 1 primary key
- trying to create 2 in 1 table will error
- most auto-incrementing integer keys start at 1

### SQL: Dropping tables and columns

- if you `DELETE` all the data in a table, the table itself will still exist
- sometimes it is better to just destroy the table itself
- you can remove a table by `DROP`ing it
- you can't access a dropped table because it no longer exists, you'll error
- deleting is always about data, dropping is about db structure as it removes tables
- in most dbs, you can drop single columns from tables
- there are other things you can drop too

## 22/9/21

### SQL: Bind parameters

- SQL is always combined with other languages like JS
- `?` is to indicate a parameter to be provided
- can have more than 1 `?`, if we do, we'll have to provide multiple values to fill the parameters
- you can use bind params to write functions in JS to fetch and process data from a db
- the values in the array are called bind params
- the `?` are holes, the parameters are bound to those holes
- we can ref a bind param multiple times with `?1`, referring to the 1st bind param at index 0
- syntax varies between dbs, PostgreSQL uses `$1` etc
- the query function in Node's PostgreSQL API is called `query`
- all SQL dbs support bind params in some form

### SQL: Comments

- comments begin with `--`
- everything from the `--` to the end of the line are ignored
- also support C-style `/* */` comments which can span multiple lines

### SQL: Comparing with null

- `NULL` has some sharp edges in SQL
- math ops on `NULL` return `NULL`
- comparing anything with `NULL` returns `NULL`, even `NULL = NULL`
- SQL has `IS/IS NOT NULL` that can check for `NULL`
- usually find these checks in `WHERE`s
- dbs handle `NULL` differently
- SQLite handles `NULL` similarly to most other dbs

### SQL: Selecting expressions from tables

- when `SELECT`ing from a table, you can select expressions computed from the table's columns
- in jS we concat strings with `'a' + 'b'`
- in SQLite, concat with `||`
- this is similar to or in JS but in SQL or is `OR`
- modifying a result with `SELECT` doesn't change the data because `SELECT` can't change data
- safe to hack away at a db with `SELECT`
- SQL dialects have more built in operators than other languages
- aside from the usual suspects, SQL also has `BETWEEN` which replaces a query like `x >= y and x <= z` with `x BETWEEN y AND z`
- the `AND` here is not a logical and, it is part of the `BETWEEN` syntax
- SQL uses huge numbers of language keywords, instead of providing functions

### Regular Expressions: Literals

- regexes are patterns that describe strings
- we can ask if a regex matches a given string with `regex.test(string)`, returns a boolean
- regexes are case sensitive
- multi-char regexes test if the characters appear together
- have to be adjacent, no chars between them
- spaces are treated as normal chars
- some punctuation in regexes have special meaning

### Regular Expressions: Wildcard

- regexes like `/a/` are literal, they have to match exactly
- regexes are powerful because of operators
- `.` is the wildcard operator and matches any character
- it won't match an empty string
- `/./` does not match newlines
- putting a `.` next to another char means that they occur consecutively
- multiple `.` can match different chars

### Regular Expressions: Boundaries

- boundaries allow us to match at the beginning and end of strings
- `^` means the beginning of a string
- `$` means the end
- usually we want to match a whole string, most regexes include these boundaries
- use both on their own to match an empty string
- there are no errors, regexes always return `false`
- using boundaries in the wrong place will return false

### Regular Expressions: Repetition

- `+` requires something to occur one or more times
- `+` works with `.`
- `*` means zero or more times
- can use these operators multiple times in a regex

### Regular Expressions: Or

- sometimes we need to allow multiple alternatives
- we separate them with `|` ('or')

## 23/9/21

### Regular Expressions: Hex codes

- text is stored as numbers
- we can write those numbers as hex codes
- regex and most languages use the 'x' syntax to indicate a hex code
- `x41` is A, for example
- `\x` can only be followed by 2 hex digits, anything after is a different part of the regex
- `\x` with only one digit after will handle the x as a literal x
- hex digits can be any of 0-9, a-f, A-F, if we use anything else the `\x` will treat the x as a literal x

### Regular Expressions: Parens

- you can use parentheses to group operators together
- example, `/^a|b$/` means a at the start or b at the end, same as `/(^a)|(b$)/` whereas `/^(a|b)$/` means starts and ends with an a or b
- parens can factor out common elements
- `/^p(ng|df)$/` will match pdf and png
- either side of an `|` can be empty which means exactly the letter or an empty string

### Regular Expressions: Escaping

- most languages are delimited with "double quotes"
- to put literal " in a string we need to escape it like this `"\""`
- operators can be used literally with `\`, like `\+` for literal +

### SQL: Multiple statements

- you cna separate statements with `;`
- only data from the last statement will be returned
- later statements will always see changes made by earlier statements
- usually `;` works like calling `exec` multiple times
- except with bind params
- many db APIs don't let you use `;` with bind params

### SQL: Null in unique constraints

- `NULL` values are ignored by a `UNIQUE` constraint

### SQL: Referencing other tables

- data can relate to other data
- you can store data in other data but this gives up SQL's value
- you can combine db queries to multiple tables with JS

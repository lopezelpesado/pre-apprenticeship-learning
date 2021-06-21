# Execute Program Learnings

## 18/6/21

### Modern JavaScript Lesson: Strict Mode

- I've learned from this [Execute Program (EP) guide](https://www.executeprogram.com/courses/modern-javascript/articles/how-to-run-javascript-code) that I can run my JavaScript (JS) using Node.js from my Linux terminal. If I type `node --use_strict`, it'll open up a REPL in strict mode (what EP use) and if I add a JS file name at the end it'll run that file in strict mode, nice!
- Apparently we rarely want global variables (like `x = 1`) and "strict mode" prevents this.
- You can enable strict mode by putting `"use strict"` at the top of a module or function.
- Most JS compilers automatically insert this.
- Strict mode is part of an attempt to modernize JS by disallowing old and confusing behaviours.
- Base 8 is called octal and JS supports numbers in it. Using octals in stirct mode throws errors.
- In strict mode, `delete` can be used to completely remove a key from an object. It could also be used to delete an entire variable but this causes an error in strict mode. you can't delete `Object.prototype` because that would be very bad.

## 21/6/21

### Review: Strict Mode

- Strict mode prevents global variable declartions such as `x = 1`, will return an error
- Also prevents deletion of entire variables

### Modern JavaScript Lesson: Let

- Local variables used to be declared with the `var` keyword. Inside a function, it's only visible in the function. `var` can be used in strict mode
- Trying to reference a local variable outside of the scope in which it's defined will give an error
- `var`s are "function-scoped" and visible to the entire function body
- `var` inside an `if` block inside a function is also visible outside the block to the rest of the function
- This is not good, variables inside `if`s should only be visible inside the `if`
- The `let` keyword fixes this
- Variable shadowing is when a certain scope has the same name as a variable outside that scope
- We don't need a construct like `if` or `while` to create a new scope. Any code within `{}` will have its own scope
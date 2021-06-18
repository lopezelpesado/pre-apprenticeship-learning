# Execute Program Learnings

## 18/6/21 Lesson: Strict Mode

- I've learned from this [Execute Program (EP) guide](https://www.executeprogram.com/courses/modern-javascript/articles/how-to-run-javascript-code) that I can run my JavaScript (JS) using Node.js from my Linux terminal. If I type `node --use_strict`, it'll open up a REPL in strict mode (what EP use) and if I add a JS file name at the end it'll run that file in strict mode, nice!
- Apparently we rarely want global variables (like `x = 1`) and "strict mode" prevents this.
- You can enable strict mode by putting `"use strict"` at the top of a module or function.
- Most JS compilers automatically insert this.
- Strict mode is part of an attempt to modernize JS by disallowing old and confusing behaviours.
- Base 8 is called octal and JS supports numbers in it. Using octals in stirct mode throws errors.
- In strict mode, `delete` can be used to completely remove a key from an object. It could also be used to delete an entire variable but this causes an error in strict mode. you can't delete `Object.prototype` because that would be very bad.
# Week 8 Execute Program Learnings

## 4/8/21

### Modern JavaScript: Default parameters

- calling a func and missing an arg will give that parameter `undefined`
- you don't get an error
- it's clunky to use this for default parameters
- JS has support for defaults
- defaults are declared with `=` when declaring parameters
- they are evaluated when the function is called and not when it is defined
- they can reference other arguments
- Python works differently so watch out if you learn that
- default parameters also work in class methods
- any value can be used as a default, including objects
- even an inline anon class
- can use destructuring with defaults
- JS virtual machines allow you to use defaults with rest parameters, rarely useful

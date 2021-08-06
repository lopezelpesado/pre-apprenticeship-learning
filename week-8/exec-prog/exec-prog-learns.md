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

### Modern JavaScript: Static methods

- classes themselves can have methods, not just instances of the classes
- these are called static methods
- the method exists on the class variable itself
- JS classes can only have one constructor but you can use static methods as an alternative
- accessors can also be static
- accessing a static accessor on an instance will return `undefined` just like accessing any property on an object that isn't there
- inside a static method or accessor, `this` refers to the class itself

## 5/8/21

### Modern JavaScript: Computed methods and accessors

- computed props are where obj keys are determined dynamically
- this exists for classes too
- computed method names are computed once when the class is defined, if we change the value the computed method was defined with it won't affect it as it's already defined
- classes defined in functions can use the functions arguments to compute accessors and methods
- this is not used very often
- remember, once they are defined, that's it, they don't change

### Modern JavaScript: Symbol basics

- obj keys are usually strings
- can be accessed with `obj.name` or `obj.['name']`
- most JS data types can't be used as obj keys
- `true` as a key will be converted to `'true'`
- if an obj has `'true'` as a key and then try creating a `true` key, `'true'` will get overwritten
- Modern JS has fixed this by adding symbols
- symbols are a new data type that can be used in obj keys
- you can define a symbol by giving it a description `Symbol('name')`
- the description should say what the symbol is used for
- `.description` will return the name in `Symbol('name')`
- symbol equality works like array equality, a symbol is always equal to itself
- 2 arrays are never equal to each other even when they have the same elements
- similarly with symbols, 2 symbols are never equal to each other, even with the same description
- symbols can be used as obj keys
- we have to use compute syntax to use the symbol
- can only be accessed with `obj[key]` syntax
- symbols are not just a special kind of string
- `'name'` and `Symbol('name')` can both be keys with different values
- symbols exist to allow us to add props to objs without affecting the regular props

### Modern JavaScript: Builtin Symbols

- JS already has some symbols
- they are used for metaprogramming or changing the behaviour of a program using code
- using the built in symbols we can change how JS runs our code
- `.toString()` on an object results in `'[object Object]'`
- if the obj has a prop called `Symbol.toStringTag` then `.toString()` will return the value instead of `Object` in `'[object Object]'`
- `Symbol.toStringTag` can be assigned to an existing obj or can be assigned when the obj is defined
- have to use a computed prop for when the obj is defined

## 6/8/21

### Modern JavaScript: Defining iterators

- strings, arrays and other data types are iterables
- can be iterated over by loops and the like
- there are rules for how iteration works
- the iterable exposes a method
- the iterator calls those methods
- on an array there is a `Symbol.iterator` method
- the iterator object has a `next` method, calling it gives us one of the elements in the array
- the element is wrapped in an object that has a `done` flag that tells us if there is more data left
- each `next` call returns the next value from the array
- once all items have been iterated over, the next `next` will change the done flag to `true` and the value will be `undefined`
- the iteration is finished
- you can define your own iterable object and our own iterator
- we need a `next()` method that returns an obj with keys value and done
- you can use a class or object
- the process of iterating is governed by the 2 iteration protocols
- 1 is the iterable protocol, an obj has a `Symbol.iterator` method, arrays, strings and custom objs follow this
- 2 is the iterator protocol, an obj has a `next` method which returns an obj `{value, done}`

### Modern JavaScript: Problems with object keys

- obj keys must be strings, nums or symbols
- any other value is converted to a string
- if we use an obj as a key, it gets converted to `'[object Object]'`
- the solution to this is the map data type

### Modern JavaScript: Symbols are metadata

- symbols are metadata, they are not a normal part of an object
- when we serialize an object with `JSON.stringify`, symbol props are ignored
- round tripping an obj with symobol props will lose them
- this is useful as it means `Symbol.toStringTag` won't show up in JSON
- you can store sensitive data in symbol props as they will be lost when JSONing them for API use
- well behaved data serialization tools will ignore symbol props

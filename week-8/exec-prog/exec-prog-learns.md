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

## 8/8/21

### Modern JavaScript: Iterators

- generators and iterators work with for-of loops
- a generator is a way to define an iterable
- a generator does all usual iterator stuff
- calling a generator gives us an iterable
- calling the iterable's `Symbol.iterator` methods gives an iterator
- calling the iterator's `next` method gives us a `{value, done}` obj
- generators are more common than manual iterators
- knowing iteration protocols will make identifying bugs easier
- iterators (and generators) can be used for more than for-of loops
- e.g. array destructuring syntax works with iterables
- iterators always go forward, once a value has been iterated you can't go back to it
- this is central to iterators' purpose
- iterators can iterate over data even when not all the data is present
- iterators can have infinite length
- generators with an infinite loop can be used because they'll only loop as many times as needed
- when destructuring and iterator, its `next()` will be called just enough times to get the destructured data
- iterators are lazy, they only produce data when it's needed
- using a for-of loop or destructuring wrong will cause an error
- if you call `Array.from()` on a non iterator, you'll get `[]`, not good as this can hide bugs

### Modern JavaScript: Maps

- objs can only have strings and symbols as keys
- `Map` data type does not have that limitation
- `Map`s are similar to objs but the keys can be anything
- `.set()` is used to assign a value to a key
- `.get()` is used to retrieve the value at that key
- `someMap[someKey]` does not work with `Map`s, you'll get a result but it won't be what you want and usually `undefined`
- initialise a map with an array of 2 element arrays corresponding to a key value pair
- objs can only have 1 value at a given key, if we set a key twice only the last value is remembered
- `Map`s work the same way
- `set`ting a key twice overwrites the first value with the 2nd
- `delete()` deletes a key, `clear()` empties the entire map and `has()` tells us if a key exists
- `get()`ing a key that doesn't exist returns `undefined`
- the `.size` prop returns the number of items in the map
- setting the same key twice does not change the size
- `Map`s can be used to make graphs where nodes are connected by edges and can be stored in the map (like cities and their connections)

### Modern JavaScript: Map iterators

- `Map`s have `keys()` and `values()` methods
- keys and values will be returned in the insertion order
- `Map`s can be turned into arrays with `Array.from()` and the keys and values will come out how the constructor takes them, an array of 2 element array representing key value pairs
- you can destructure maps directly which comes out as an array of 2 elements representing a key value pair
- you can use an iterable as a constructor argument for a map
- `Map`s are iterables, we can copy a map by passing in the old one

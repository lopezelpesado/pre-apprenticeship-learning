# Week 7 Execute Program Learnings

## 2/8/21

### Modern JavaScript: Extending classes

- JS classes can extend (inherit from) other classes, a subclass can be extended from a superclass
- subclasses will have all props of a superclass plus any defined for the subclass
- super and subclasses can have their own constructors
- subclass constructor calls the superclass constructor with super() and passes the args to it
- you gotta call `super` if the subclass has a constructor else you will get an error
- even if the superclass does not have a constructor
- `instanceof` can be used to check if an object is an instance of a given class
- as subclass is a class of a superclass
- you can inherit classes that inherit from other classes that inherit other classes etc
- you can define a prop or method in a subclass which already exists in the superclass, the subclass version overrides the superclass version
- JS has no syntax for inheriting from multiple different supers at once

### Modern JavaScript: String keyed methods

- you can put quotes around a shorthand method's name to allow spaces and punctuation
- they can't be called with `object.method` but have to be called with `object['method']`
- defining an object method as a string is called "string key method"
- we can use non english words this way
- syntax that works in objects will usually work with classes

### Modern JavaScript: Class scoping

- classes follow the scoping rules of variables
- can be defined inside a function or conditional
- very few use cases for this but it can be done!
- usually better to define a classes at the top level
- when classes are defined dynamically, in functions, the class def can see the variables in scope
- a class defined in a func can see the args
- no classes within classes, throws an error
- classes are only visible inside the scopes in which they are defined
- referencing a class outside of its scope will throw an error

### Modern JavaScript: Customizing JSON serialization

- `JSON.stringify` can take a second arg `replacer`
- if we give it an array of strings then only those keys will be included in the object
- can also take a callback with 2 args, `key` and `value`
- during stringification, the replacer is called wiht the key and value for each object, array etc.
- we can replace any value by returning the new value that should take its place
- first replacer call has a key of `""` because we're not in the object yet and a value which is the whole object
- it will also go into objects within the object
- we can return the value arg unmodified which won't change anything
- we can return another value which will replace the original in the stringified JSON
- we can return undefined which will remove the key from the stringified JSON
- `JSON.parse` has a similar second arg called the `reviver`, does the same thing really but can replace a value in the returned object
- reviving on `""` will replace all values

### Modern JavaScript: Property order

- Modern JS guarantees object key ordering, unlike some other languages
- an object's keys will be in the order that they were defined in the object
- if we add more keys, the ordering is preserved
- also preserved with `JSON.parse`
- `stringify` also preserves order so round tripping will preserve order
- one exception when objects have numbers for keys
- numbers always come first in the list, are ordered numerically and converted to strings
- strings come next in the order they were inserted
- objects with numbers and string keys are uncommon

### Modern JavaScript: Set operations

- sometimes we want to find every element that's in set1 or set2 (union)
- for sets, we can pass an array to the `new Set` constructor to build a set with all elements of an array
- then we can spread the contents of the set into a new array
- sometimes we want to find a set intersection, every element that is in set1 and set2
- `filter` can be used for this
- convert the first set into an array and filter with `has` on the second array
- sometimes we want to find every element in one set that isn't in another set
- same as intersection but reverse the logic of the filter
- set operations are a lot faster than there array equivalents, set ops are O(n) whereas arrays are O(n^2)

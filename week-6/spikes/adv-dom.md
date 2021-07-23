# [Advanced DOM](https://learn.foundersandcoders.com/course/syllabus/pre-app-6/spikes/)

How can we use advanced DOM features to make rendering complex UIs easier.

## Questions to consider

  1. What is a NodeList?

     A NodeList is an object which is a collection of nodes (an HTML element)

      - How is it different from an array?

         A lot of array methods won't work with a NodeList, although `forEach` does work. A NodeList can be converted to an array with `Array.from`.

      - What’s the different between “live” and “static” NodeLists?

         A live NodeList is one that reflects any changes to the DOM (`Node.childNodes` is an example) whereas a static NodeList does not reflect changes made to the DOM (like the NodeList returned by `document.querySelectorAll()`)

  2. What is the `<template>` element?

     An element which can be used to hold HTML that isn't going to be rendered on page load but can be used later by the JS.

     - How can we use this to render dynamic UI?

        With a template, we can write JS that clones the template, modifies it and then adds it to the page. This can be done multiple times based on an array or user input.

## Useful resources

- [NodeList | MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [The Content Template Element | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [Template element example](https://codepen.io/oliverjam/pen/yLNEOQO?editors=1010)
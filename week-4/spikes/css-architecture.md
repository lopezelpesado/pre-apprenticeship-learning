# Week 3 Technical Spikes

## CSS Architecture

### Questions to consider 

1. Why are CSS naming conventions useful?
    - CSS can get unmaneagable at scale, we can overcome this by imposing our own structure, naming conventions are an example of this
    - Makes your code stricter, more transparent and more informative
    - Tells you what a class does, where it is used and what it is related to
    - Particularly useful in HTML as it tells you at a glance which classes are and are not related
    - You shouldn't mix up your JS and CSS with the same class, naming conventions can help you separate them out with a simple `js-` prefix

2. When might specificity become a problem?
    - IDs are not only over-specific but also they cannot be used more than once on a page, classes can be used as many times as you want
    - IDs trump everything
    - Only way to override an ID is to write an even more specific one, which just leads to a never ending spiral of specificity
    - Good to keep specificity low as possible all the time
    - Don't use IDs in CSS, don't nest selectors (`main p`), don't qualify classes (`main.bold`), don't chain selectors

3. How can composition help us build UIs?
    - *composition over inheritance*, larger systems should be built of smaller individual parts
    - Nothing inhertently relies on anything else
    - Allows you to easily reuse and recycle functionality
    - Can quickly construct larger parts of UI from known composable objects

### Resources

- [CSS Guidelines](https://cssguidelin.es/)
- [BEM Methodology](http://getbem.com/introduction/)
- [Composition - Every Layout](https://every-layout.dev/rudiments/composition/)

## Responsive design

### Questions to consider 

1. What CSS units should we use for dimensions? What are absolute and relative units?
    - 

2. When should you use a media query? Are they only for screen size?
    - 

3. How can mobile-first CSS make responsive styling easier?
    -  

### Resources

- [Units - Every Layout](https://every-layout.dev/rudiments/units//)
- [The lengths of CSS](https://css-tricks.com/the-lengths-of-css/)
- [How To Write Mobile-first CSS](https://zellwk.com/blog/how-to-write-mobile-first-css/)
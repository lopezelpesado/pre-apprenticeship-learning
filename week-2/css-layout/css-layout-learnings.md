# CSS layout

- Modern CSS has powerful tools for controlling the layout of elements on a page
- You can create "primitives" (single-purpose bits of CSS) and combine them to create complex layouts

## Layout fundamentals

### Flow Layout

- "Flow layout" is the default way elements behave
- Block elements take up the full-width of the page (`div`, `header`, `p`)
- Inline elements only take up as much horizontal space as they need and can sit next to each other (`span`, `strong`, `a`)
- Viewport scrolls vertically when there is too much content
- If content is too wide, it wraps to the next line
- You can achieve a lot with this layout

### Flex box layout

- Set with `display: flex`, an alternate to normal layout
- Allows parent element to control how children are laid out
- By default, it puts all elements on a line (like inline) but won't wrap unless you set `flex-wrap: wrap`
- Flex box is usually used for single direction layouts
- Better for layouts where you don't need exact control over where an element goes

### Grid layout

- Also lets a parent element specify rows and columns for children to slot into
- Set with `display: grid`
- You can create specific layouts with `grid-template-columns` and `grid-template-rows`
- You can then place elements in specific locations of the grid with `grid-columhn` and `grid-row`
- Grid is used for 2 direction layouts
- Works best for a specific grid and less flexible

## The Center: constraining content width

- Content should not be too wide, hard to read
- Content is often in a narrow horizontally centered column
- Best way to contrain width is with `max-width` property
- Better than `width` as it allows content to shrink if viewport gets smaller
- Can then use margin to control where the column goes
- `auto` tell uses as much leftover space as possible, `margin-auto: left` would shove content to the right to make the left margin as big as possible
- You can center by setting left and right margins equal, e.g both to `auto`

### Customising width

- We need to control how wide the Center allows content to get otherwise it's not vert reusable
- We could use a variable for `max-width`, but this allows any value to be used and could lead to inconsistent design
- We could use inheritence from the parent, but this can be confusing
- Instead of variables, we can define modifier classes which override the max width
- The classes can be added when we want a different width to the default

## The Stack: controlling vertical space

- The most important primitive is one to control the space between elements
- For useability and simplicity, best not to appoly spacing rules to individual elements
- E.g if you put `margin-left` on a button, you can only use that where it makes sense
- Best to use a parent element to apply spacing to it's children, called "stack"
- `.class > *` apply styles to all children of the element
- `.class > *:first-child` apply to the first child of the element
- `.class > *:not(:first-child)` apply to all children that are not the first
- `.class > * + *` apply only to elements that have a sibling before them (so not the first)

## The Row: placing elements next to each other
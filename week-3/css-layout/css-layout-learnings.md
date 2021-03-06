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

- Another useful primitive is row
- You often need elements placed next to each other
- Flex box is designed for 1D layouts so perfect for this
- Setting `display: flex` will control how an elements children are laid out and by default they'll be put in a row

### Making it responsive
- This layout does not adapt
- the flex children will shrink as much as they can but they can't go smaller than the largest word inside them, words will get cut off
- Can't cope with different screen sizes
- You want things to wrap if there is not enough space

### What about media queries?

- We don't need them here as they are intrinsically responsive
- Easier than figuring out break points

### Spacing children out

- `gap` can be used to put space between elements
- Just using `gap` means the gap is maintained even when they wrap
- Not supported for flex box in Safari but you can approximate it with margins

### Alignment

- flex box gives control over how children are aligned in each direction
- Most of the time you want things vertically centered
- `align-items` allows you to control vertical alignment
- This can be customised in the same way as before with variables or modifiers
- `justify-content` controls horizontal alignment

### The Grid: equal-sized children

- Sometimes you need to create a grid of elements, like an image gallery
- Every element should be the same size and the grid should automatically put as many elements as can fit in a row
- CSS Grid can do this
- Creates a 2D layout (columns and rows) and keeps all elements consistently sized
- We can make a grid and set a specific number of columns
- `gap` can be used to space the columns out
- `grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr))` can be used to automatically create columns based on the size of the viewport
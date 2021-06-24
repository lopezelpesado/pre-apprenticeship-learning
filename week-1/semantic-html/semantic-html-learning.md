# [Semantic HTML](https://learn.foundersandcoders.com/workshops/semantic-html/)

- HTML is a markup language, things are marked up with extra information about them
- This communicates the semantics of the document, what each thing means
- Describing markup as semantic means it describes the structure of a document
- It tells the browser what things are rather than how they should look or what they contain
- You can make a `<div>` look like a button and behave like a button but a browser won't recognise it as a button, it'll see it as a `<div>` like any other
- It's important to use semantic HTML elements so that browsers know what those elements are
- Browsers have default styling for different elements, you don't have to start from scratch styling each element
- If you use semantic elements and you CSS is broken or doesn't load, you'll still end up with an OK page
- Using semantic elements means you don't have to reproduce complex behaviours like how `<select>` works, your browser has that functionality built in
- Most importantly, semantic HTML is machine readable
- Example, reader mode in browsers might look for `<header>` and `<article>` tags and jsut display those, stripping out ads and pop ups. Without those semantic elements, that wouldn't work
- Machine readability is very important for accessibility
- The web is for everyone including those who access the web with assistive technologies like screen readers
- Screen readers rely on semantics, using `<h1>` and `<h2>` allows users quickly jump from section to section without having to wait for all the content to be read
- This reproduces quickly scanning the headings to get an idea of the structure of a page for visually impaired users
- There are almost 100 HTML elements
- Just remember there might be a more specific tag rather than a `<div>` or `<span>`
- Especially for top level block elements
- If it's a meaningful area of a page, use `<header>` or `<footer>`
- A label for the start of a new section can use an `<hn>` tag
- If it takes you to a new page, use `<a href="/page">`
- If it triggers JS, use `<button>`
- If it collects user input, use `<form>` with `<input>`s (including `<label>`s for them)
- If it's just for applying layout or styles, you can use `<div class="grid">` or `<span class="big-text">`

## Challenge

- Rewrite the challenge HTMl to have no `<div>`s

### Learnings

- Subtitles should not be headings
- Should wrap the title of the page in a header tag along with the subtitle
- Submit buttons should have the type "submit" which means pressing enter whilst inside the form will submit
- Can use `<blockquote>` with `<cite>` for quotations
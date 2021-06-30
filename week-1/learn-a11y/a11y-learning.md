# [Learn Accessibility](https://learn.foundersandcoders.com/workshops/learn-a11y/)

- The web is for everyone
- We should build interfaces that are accessible to as many people as possible
- Disabled people are often excluded by web interfaces
- As developers, we have a moral and legal imperative to make sure our apps are accessible
- A UI that only a sighted person with a mouse can use is broken in the same way a UI that can't be used with a mouse
- Don't make assumptions about how people will use your site
- Make your UIs usable by everyone
- Get out of your comfort zone when testing your UI

## Common problems

- You musn't forget that not everyone uses your apps like you do
- If you only use colours to indicate what a button does, it's inaccessible to colourblind people
- If you only use images to communicate important information, this is inaccessible to blind and visually impaired people
- If your UI doesn't allow for keyboard navigation, it's inaccessible to anyone who can't use a mouse for whatever reason
- If your app only works properly on the latest devices, it's inaccessible to those who do not have the money to always have the latest devices
- Keyboard use and screen reader use are the most common accessibility considerations for web dev but other disabilities and access needs should be considered

## Different ways to navigate

- It's important, as a non-disabled web dev, to know the different ways people navigate the web to be able to build your sites to work for them

### Keyboard navigation

- Many people can't use a mouse or find using a keyboard easier
- You can scroll a web page using up or down on the keyboard
- Space will jump a page (a whole viewport height) down
- Page up or down will jump up or down a page
- Home or End will take you to the top or bottom of a page
- Tab is the most important key as it moves "focus" to the next interactive element on the page
- By deafault, the focused element has an outline (Chrome default is blue glow)
- You "click" a focused element with enter or spacebar
- You can submit a form whilst focused on one of its inputs

### Screen readers 

- Visually-impaired and blind people use screen readers that read whatever is on the page out loud
- Most OSes have a built-in screen reader
  - MacOS: VoiceOver
  - Windows 10: Narrator
  - Linux: Orca

### Combinations

- Some devs attempt to detect the way in which a user is accessing a site, this is a bad idea
- You should try to create as similar an experience for everybody

### Testing accessibility

- Web accessibility (a11y) is governed by the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG)
- This has criteria you can check your site against
- A quick way to test a site is to use the [The A11y Project's Checklist](https://www.a11yproject.com/checklist/)
- Automated tests only catch some problems
- Chrome has the "Lighthouse" tab in Dev Tools
- It will tell you obvious fails like contrast or missing alt text but not more complex problems
- You should manually test, try using only your keyboard, use your screen reader
- Manual testing will help you catch problems automated tests can't

## Challenge

Test and fix the problems on [this page](https://learn.foundersandcoders.com/workshops/learn-a11y/starter-files/).

### From Lighthouse

- Background and foreground colours don't have a sufficient contrast ratio
  - Text on the page is too light
  - Reduced lightness for body color
- Document doesn't have a `<title>` element
  - Added `<title>`
- Images don't have alt text
  - 
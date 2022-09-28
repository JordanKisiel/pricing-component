# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.png)


### Links

- Live Site URL: [https://jordankisiel.github.io/pricing-component/](https://jordankisiel.github.io/pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/) - CSS Framework
- Vanilla JS


### What I learned

The vast majority of the challenge with this project for me was in implementing the functionality using Javascript. Initially I tried implementing a slider UI component using div's and JS but the intricacies of having the UI element behave in the expected way proved too frustrating. Searching for a better approach, I found the range input element. I was concerned that I wouldn't be able to style it to fit the design but it was easier than I thought it would be (although I did have to write a decent amount of custom CSS rather than relying on Tailwind). The range input provided exactly what I needed from a UI perspective but implementing the rest of the functionality was still a good challenge.

Some of the specific Javascript lessons I learned were: that the switch statement does not coerce types when making comparisons, how to use Object.keys and Object.values to work with data in objects, and how to listen for window resize events.

I also learned that if I'm going to be toggling classes on and off with Javascript, I need to update the Tailwind config file to make sure classes in JS files are also included in the compiled CSS file.

### Continued development

Ideally for my next project, I'd like there to be a comparable Javascript challenge so that I can refine my coding approach without having to worry about too many new challenges. By refining, I mean attempting to write in a more functional style where I'm passing objects and variables in via parameters and returning new data rather than altering the original. From what I've read, this makes reasoning about the code easier which was a concern of mine as I approached the end of this project.

### Useful resources

- [JavaScript + CSS Range Slider | Costum Value Range Slider Webdesign Tutorial](https://www.youtube.com/watch?v=BrpiNUf2XCk) - This video helped me quite a bit in styling the slider component.

## Author

- Website - [Jordan Kisiel](http://robojojo.co/)
- Frontend Mentor - [@JordanKisiel](https://www.frontendmentor.io/profile/JordanKisiel)
- Twitter - [@JordanKisiel](https://www.twitter.com/JordanKisiel)
# Coding Test: ClearScore Carousel

This is an attempt at the [ClearScore Carousel Coding Challenge](https://github.com/ClearScore/tech-screen/tree/master/carousel)

View the result here: https://humancatfood.github.io/clearscore-carousel/

## How to run

1. clone and cd into the repo
2. run `npm install`
3. run `npm start`
4. point your browser at `localhost:3000`

4a. run `npm test -- --coverage` to see results of testing

(replace `npm` with `yarn` depending on personal taste)

## How to read/use the code

The entry-point, `src/index.js`

- imports the `ScoreIndicator` component from `src/ScoreIndicator.js`
- constructs a list of slides (using the sample data from `creditReportInfo.json`), each of which has
  - a `render` function which outputs a list of ScoreIndicator components to be shown in the indicator (at the moment there are `SlideText`, `SlideNumber` and a `Spacer` component
  - an optional `arcValue` field, which can be set to a value between `0.0` and `1.0` and triggers the arc to be displayed when the slide comes into view
- renders a `ScoreIndicator` using these slides to the screen


## Thoughts/improvements

### Styling:

- I didn't know exactly which colours and fonts to use, but they're trivial to replace
- the `SlideText` component has a boolean `highlight` prop, which colours the text differently, this could be
  - applied to other components
  - extended to other effects like `emphasize` or `flash` or whatnot
- the `Spacer` component could have optional levels of spacing (`1`, `2`, `3`, etc) which could translate directly to `flex-grow` values applied to the rendered `br` element
- the responsiveness is a bit rudimentary for now. To be actually usable for different screen-sizes this needs careful testing and tweaking


### Misc:

- seeing how the arc and its animation are stretch-goals, I didn't write any tests for them yet
